export const useContact = () => {
    const isContactModalOpen = useState('isContactModalOpen', () => false)
    const hasBeenOpened = useState('hasBeenOpened', () => false)
    const isAutoTimerStarted = useState('isAutoTimerStarted', () => false)

    const openContactModal = () => {
        isContactModalOpen.value = true
        hasBeenOpened.value = true
        isAutoTimerStarted.value = true // Prevent auto-popup if opened manually
    }

    const closeContactModal = () => {
        isContactModalOpen.value = false
    }

    const toggleContactModal = () => {
        isContactModalOpen.value = !isContactModalOpen.value
        if (isContactModalOpen.value) {
            hasBeenOpened.value = true
            isAutoTimerStarted.value = true
        }
    }

    // New centralized method for the 5s popup
    const startAutoPopupTimer = (callback: () => void) => {
        if (import.meta.server) return; // Only client side

        const sessionInteracted = sessionStorage.getItem("jfk_contact_interacted");
        if (!sessionInteracted && !isAutoTimerStarted.value && !hasBeenOpened.value) {
            isAutoTimerStarted.value = true;
            setTimeout(() => {
                if (!hasBeenOpened.value && !isContactModalOpen.value) {
                    callback();
                    sessionStorage.setItem("jfk_contact_interacted", "true");
                }
            }, 5000);
        }
    }

    return {
        isContactModalOpen,
        hasBeenOpened,
        openContactModal,
        closeContactModal,
        toggleContactModal,
        startAutoPopupTimer
    }
}
