import $ from 'jquery';

// console.log('nick');

$(document).ready(() => {
    // Basket breakdown vars
    const basketBreakdownTrigger = $('.js-basket-desktop-trigger');
    const basketBreakdownContent = basketBreakdownTrigger.siblings('.js-basket-breakdown-content');
    const basketBreakdownIcon = basketBreakdownTrigger.find('.basket-summary__included-icon');
    let basketBreakdownVisible = true;

    // Basket summary vars
    const basketSummaryEssentialsTrigger = $('.js-basket-essentials-trigger');
    const basketSummaryEssentialsContainer = $('.basket-summary__essentials');
    const basketSummaryEssentialsIcon = basketSummaryEssentialsTrigger.find('.basket-summary__essentials-icon');
    let basketSummaryVisible = false;

    // set initial aria attributes for toggle-able content
    basketBreakdownContent.attr('aria-expanded', basketBreakdownVisible);
    basketSummaryEssentialsContainer.attr('aria-expanded', basketSummaryVisible);

    const reverseAriaAttr = (content, val, section) => {
        val = !val;
        if (section === 'breakdown') {
            basketBreakdownVisible = val;
        } else if (section === 'essentials') {
            basketSummaryVisible = val;
        }
        content.attr('aria-expanded', val);
    };

    basketBreakdownTrigger.click(() => {
        // rotate the arrow on trigger link
        basketBreakdownIcon.toggleClass('basket-summary__included-icon--rotated');
        // hide visibility of basket breakdown
        basketBreakdownContent.toggleClass('basket-summary__breakdown-content--visible');
        // update aria attribute based on new visibility state
        reverseAriaAttr(basketBreakdownContent, basketBreakdownVisible, 'breakdown');
    });

    basketSummaryEssentialsTrigger.click(() => {
        basketSummaryEssentialsIcon.toggleClass('basket-summary__essentials-icon--rotated');
        basketSummaryEssentialsContainer.slideToggle();
        reverseAriaAttr(basketSummaryEssentialsContainer, basketSummaryVisible, 'essentials');
    });
});