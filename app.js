(function () {
  'use strict';
  const content = window.SITE_CONTENT || {};
  const { createApp } = Vue;

  function updateDocumentMeta(meta) {
    if (!meta) return;
    if (meta.title) {
      document.title = meta.title;
    }
    if (meta.description) {
      const descriptionTag = document.querySelector('meta[name="description"]');
      if (descriptionTag) {
        descriptionTag.setAttribute('content', meta.description);
      }
    }
  }

  function ensureArray(value) {
    if (Array.isArray(value)) return value;
    if (value === null || value === undefined) return [];
    return [value];
  }

  function parseDateToTimestamp(dateString) {
    if (!dateString) {
      return null;
    }
    const timestamp = Date.parse(dateString);
    return Number.isNaN(timestamp) ? null : timestamp;
  }

  const app = createApp({
    data() {
      return {
        ...content,
        activePostSlug: null,
      };
    },
    computed: {
      activePost() {
        if (!this.writing || !Array.isArray(this.writing.posts)) return null;
        return this.writing.posts.find((post) => post.slug === this.activePostSlug) || null;
      },
    },
    methods: {
      openPost(slug) {
        if (!slug) return;
        this.activePostSlug = slug;
        this.replaceHash(`post/${slug}`);
        this.scrollToSection('writing');
      },
      closePost() {
        this.activePostSlug = null;
        this.replaceHash('writing');
        this.scrollToSection('writing');
      },
      replaceHash(fragment) {
        try {
          const url = new URL(window.location.href);
          url.hash = fragment ? `#${fragment}` : '';
          window.history.replaceState(null, '', url.toString());
        } catch (error) {
          window.location.hash = fragment ? `#${fragment}` : '';
        }
      },
      scrollToSection(id) {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      },
      syncFromHash() {
        const raw = window.location.hash.replace(/^#/, '');
        if (raw.startsWith('post/')) {
          const slug = raw.slice(5);
          const exists = this.writing && this.writing.posts && this.writing.posts.some((post) => post.slug === slug);
          this.activePostSlug = exists ? slug : null;
        } else {
          this.activePostSlug = null;
        }
      },
    },
    created() {
      if (!this.navigation) {
        this.navigation = { brand: { label: '', href: '#about' }, items: [] };
      }
      if (!this.navigation.brand) {
        this.navigation.brand = { label: '', href: '#about' };
      }
      this.navigation.items = ensureArray(this.navigation.items);

      if (this.hero) {
        this.hero.summary = ensureArray(this.hero.summary).filter((text) => !!text);
        if (this.hero.primaryAction && !this.hero.primaryAction.href) {
          this.hero.primaryAction = null;
        }
        if (this.hero.secondaryAction && !this.hero.secondaryAction.href) {
          this.hero.secondaryAction = null;
        }
      }
      if (this.highlights && Array.isArray(this.highlights.items)) {
        this.highlights.items = this.highlights.items.map((item) => ({ ...item }));
      }
      if (this.writing) {
        this.writing.backLabel = this.writing.backLabel || 'Back to writing';
        if (!this.writing.archive || !this.writing.archive.href) {
          this.writing.archive = null;
        }
        const normalizedPosts = ensureArray(this.writing.posts)
          .filter((post) => post && post.slug)
          .map((post, index) => {
            const body = ensureArray(post.body).filter(
              (paragraph) => typeof paragraph === 'string' && paragraph.trim().length,
            );
            const links = ensureArray(post.links).filter((link) => link && (link.href || link.label));
            return {
              data: {
                ...post,
                body,
                links: links.length ? links : null,
              },
              timestamp: parseDateToTimestamp(post.date),
              index,
            };
          });

        normalizedPosts.sort((a, b) => {
          const hasATime = a.timestamp !== null;
          const hasBTime = b.timestamp !== null;
          if (hasATime && hasBTime) {
            if (a.timestamp === b.timestamp) {
              return a.index - b.index;
            }
            return b.timestamp - a.timestamp;
          }
          if (hasATime) {
            return -1;
          }
          if (hasBTime) {
            return 1;
          }
          return a.index - b.index;
        });

        this.writing.posts = normalizedPosts.map((entry) => entry.data);
      }
      if (this.contact) {
        this.contact.socials = ensureArray(this.contact.socials).filter((item) => item && (item.href || item.label));
        if (this.contact.primaryAction && !this.contact.primaryAction.href) {
          this.contact.primaryAction = null;
        }
      }
    },
    mounted() {
      updateDocumentMeta(this.meta);
      this.boundHashListener = this.syncFromHash.bind(this);
      window.addEventListener('hashchange', this.boundHashListener);
      this.syncFromHash();
      if (this.activePostSlug) {
        this.scrollToSection('writing');
      }
    },
    beforeUnmount() {
      if (this.boundHashListener) {
        window.removeEventListener('hashchange', this.boundHashListener);
      }
    },
  });

  app.mount('#app');
})();
