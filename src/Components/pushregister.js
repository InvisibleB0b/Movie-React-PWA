import axios from "axios";

window.addEventListener('load', () => {


    navigator.serviceWorker.ready
        .then(function (registration) {
            return registration.pushManager.getSubscription()
                .then(async function (subscription) {
                    if (subscription) {
                        return subscription;
                    }

                    const publicVapidKey = 'BMIjHqn2PJTxVYOB8ig5jEu-YjjJWp820xj_Vd40ZaxmhahwhgetKJOQFz6SURBN0FAkwSxri_nVDbmF2oyigRc';

                    return registration.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: publicVapidKey
                    });
                });
        }).then(function (subscription) {



            console.log(JSON.stringify(subscription));
        });



});



