import { defineStore } from 'pinia';

export const useFeedbackStore = defineStore('feedback', {
    state: () => ({
        feedbackList: [],
    }),
    actions: {
        addFeedback(ticketNumber) {
            this.feedbackList.push({ ticketNumber, date: new Date() });
        },
    },
});
