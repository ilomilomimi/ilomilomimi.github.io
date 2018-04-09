/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function() {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );

  if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      // updatefound is fired if service-worker.js changes.
      registration.onupdatefound = function() {
        // updatefound is also fired the very first time the SW is installed,
        // and there's no need to prompt for a reload at that point.
        // So check here to see if the page is already controlled,
        // i.e. whether there's an existing service worker.
        if (navigator.serviceWorker.controller) {
          // The updatefound event implies that registration.installing is set:
          // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
          var installingWorker = registration.installing;

          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in the page's interface.
                break;

              case 'redundant':
                throw new Error('The installing ' +
                                'service worker became redundant.');

              default:
                // Ignore
            }
          };
        }
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  }

  // Your custom JavaScript goes here
  $('.checkbox-native').on('change', function (e) {
    if($('.checkbox-native:checked').length > 2) {
      $(".content__btn").addClass("content__btn--disabled");
    } else {
      $(".content__btn").removeClass("content__btn--disabled");
    }
  });



  // $('.modal__close').click(function () {
  //   $(this).closest('.modal').removeClass('modal_active');
  // });

  var Share = {
    /**
     * Показать пользователю дилог шаринга в сооветствии с опциями
     * Метод для использования в inline-js в ссылках
     * При блокировке всплывающего окна подставит нужный адрес и ползволит браузеру перейти по нему
     *
     * @example <a href="" onclick="return share.go(this)">like+</a>
     *
     * @param Object _element - элемент DOM, для которого
     * @param Object _options - опции, все необязательны
     */

    // ВКонтакте
    vk: function(_options) {
      var options = $.extend({
        url:    location.href,
        title:  document.title,
        image:  '',
        text:   '',
      }, _options);

      return 'http://vkontakte.ru/share.php?'
        + 'url='          + encodeURIComponent(options.url)
        + '&title='       + encodeURIComponent(options.title)
        + '&description=' + encodeURIComponent(options.text)
        + '&image='       + encodeURIComponent(options.image)
        + '&noparse=true';
    },

    // Одноклассники
    ok: function(_options) {
      var options = $.extend({
        url:    location.href,
        text:   '',
      }, _options);

      return 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1'
        + '&st.comments=' + encodeURIComponent(options.text)
        + '&st._surl='    + encodeURIComponent(options.url);
    },

    // Facebook
    fb: function(_options) {
      var options = $.extend({
        url:    location.href
      }, _options);

      return 'https://www.facebook.com/sharer.php?'
        + 'u='       + encodeURIComponent(options.url)
    },

    // Открыть окно шаринга
    popup: function(url) {
      return window.open(url,'','toolbar=0,status=0,scrollbars=1,width=626,height=436');
    }
  };

  $(document).on('click', '#icon-facebook, #icon-ok, #icon-vk', function () {
    $('.modal').addClass('modal--active');
    $('body').addClass('lock');

    var id = this.id;
    var idToShare;
    if (id === 'icon-facebook') {
      idToShare = 'fb';
    } else if (id === 'icon-ok') {
      idToShare = 'ok';
    } else {
      idToShare = 'vk';
    }

    function handleClick(e){
      var div = $(".modal__inner");
      if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $('body').removeClass('lock');
        $('.modal').removeClass('modal--active');

        Share.popup(Share[idToShare]());

        $(document).off('click', handleClick);
      }
    }

    $(document).on('click', handleClick);
  });






})();
