const { createApp } = Vue;

createApp({
    data() {
        return {
            items: [],
            loading: true,
            error: null
        };
    },
    async mounted() {
        try {
            const response = await fetch('/api/message');
            if (!response.ok) {
                throw new Error('Failed to fetch data from API');
            }
            this.items = await response.json();
        } catch (error) {
            this.error = error.message;
            console.error("API Error:", error);
        } finally {
            this.loading = false;
        }
    }
}).mount('#app');

