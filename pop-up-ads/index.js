const DEFAULT_COOKIE_EXPRIES = 0.5; // half day
const DEFAULT_TIME_TO_SHOW_POPUP = 3000; // 30 seconds
const DEFAULT_KEY_OF_COOKIE_POPUP_SUFFIXES = 'ads-benzene'; // set default cookie popup ads
(($) => {
    $.fn.POPUPADS = (elementPopUpPrefixId, expires, timeToShowPopUp, path) => {

        let _self = this;

        _self.cookie_key = `${elementPopUpPrefixId}-${DEFAULT_KEY_OF_COOKIE_POPUP_SUFFIXES}`;

        //declare popup
        _self.popupAdsContainer = $(`.${elementPopUpPrefixId}-popup-ads`);

        //declare button close popup for
        _self.btnPopupClose = $(`.${elementPopUpPrefixId}-close-popup-btn`);

        // check cookie is expired ?
        _self.checkCookieIsExpired = () => {
            return Cookies.get(_self.cookie_key);
        }

        if(typeof _self.checkCookieIsExpired() === 'undefined' && _self.popupAdsContainer.is(':hidden')) {
            setTimeout(() =>{
                console.log('ok')
                self.popupAdsContainer.css('display', 'flex');
            }, DEFAULT_TIME_TO_SHOW_POPUP)
        }
        

        //handle button close click
        _self.btnPopupClose.click((e) => {
            _self.popupAdsContainer.hide();
        });
    }
})(jQuery)

//test

jQuery(document).ready(($) => {
    const pricePopUp = $().POPUPADS('price');
})