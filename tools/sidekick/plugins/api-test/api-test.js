import { PLUGIN_EVENTS } from 'https://main--franklin-library-host--dylandepass.hlx.live/tools/sidekick/library/index.js';

async function decorate(container, data, query) {
    const positiveToastButton = document.createElement('sp-button');
    positiveToastButton.setAttribute('variant', 'primary');
    positiveToastButton.textContent = 'Positive Toast';
    container.append(positiveToastButton);

    positiveToastButton.addEventListener('click', () => {
        container.dispatchEvent(new CustomEvent(PLUGIN_EVENTS.TOAST,  { detail: { message: 'Toast Shown!' } }))
    });

    const negativeToastButton = document.createElement('sp-button');
    negativeToastButton.setAttribute('variant', 'negative');
    negativeToastButton.textContent = 'Negative Toast';
    container.append(negativeToastButton);

    negativeToastButton.addEventListener('click', () => {
        container.dispatchEvent(new CustomEvent(PLUGIN_EVENTS.TOAST,  { detail: { message: 'Toast Shown!', variant: 'negative' } }))
    });


    const showLoaderButton = document.createElement('sp-button');
    showLoaderButton.setAttribute('variant', 'primary');
    showLoaderButton.textContent = 'Show Loader';
    container.append(showLoaderButton);

    showLoaderButton.addEventListener('click', () => {
        container.dispatchEvent(new CustomEvent(PLUGIN_EVENTS.SHOW_LOADER))
    });


    const hideLoaderButton = document.createElement('sp-button');
    hideLoaderButton.setAttribute('variant', 'secondary');
    hideLoaderButton.textContent = 'Hide Loader';
    container.append(hideLoaderButton);

    hideLoaderButton.addEventListener('click', () => {
        container.dispatchEvent(new CustomEvent(PLUGIN_EVENTS.HIDE_LOADER))
    });
}

export default {
  title: 'API Test',
  searchEnabled: false,
};
