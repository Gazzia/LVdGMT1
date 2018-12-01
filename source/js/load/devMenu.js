var devMenu = {
   isShown: false,
   show: function () {
      $("#devMenu").css('display', 'block');
      delay(function () {
         $(`#devMenu`).css('animation', 'fadeInScrollUp 0.5s ease forwards');
         delay(function () {
            devMenu.isShown = true;
         }, 500);
      }, 1);
   },
   hide: function () {
      $(`#devMenu`).css('animation', 'fadeOutScrollDown 0.5s ease forwards');
      delay(function () {
         $("#devMenu").css('display', 'none');
         devMenu.isShown = false;
      }, 500);
   },
   toggle: function () {
      this.isShown ? this.hide() : this.show();
   },
};

var devEvents = {
   modal_sample() {
      modalList.devModal();
   },
   notif_sample() {
      new Notification({
         timeOut: 15,
         type: "error"
      });
      delay(function () {
         new Notification({
            timeOut: 15,
            type: "success"
         });
         delay(function () {
            new Notification({
               timeOut: 15,
               type: ""
            });
            delay(function () {
               new Notification({
                  timeOut: 15,
                  type: "magic"
               });
               delay(function () {
                  new Notification({
                     timeOut: 15,
                     type: "inv"
                  });
                  delay(function () {
                     new Notification({
                        timeOut: 15,
                        type: "gold"
                     });
                     delay(function () {
                        new Notification({
                           timeOut: 15,
                           type: "health"
                        });
                        delay(function () {
                           new Notification({
                              timeOut: 15,
                              type: "test-EcCr"
                           });
                           delay(function () {
                              new Notification({
                                 timeOut: 15,
                                 type: "test-Ec"
                              });
                              delay(function () {
                                 new Notification({
                                    timeOut: 15,
                                    type: "test-Ré"
                                 });
                                 delay(function () {
                                    new Notification({
                                       timeOut: 15,
                                       type: "test-RéCr"
                                    });
                                 }, 500);
                              }, 500);
                           }, 500);
                        }, 500);
                     }, 500);
                  }, 500);
               }, 500);
            }, 500);
         }, 500);
      }, 500);
   },
};