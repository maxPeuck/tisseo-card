class TisseoCard extends HTMLElement {

    set hass(hass) {
        if (!this.content) {
            const card = document.createElement('ha-card');
            card.header = 'Prochains bus';
            this.content = document.createElement('div');
            this.content.style.padding = '0 16px 16px';
            card.appendChild(this.content);
            const style = document.createElement('style');
            style.textContent = `
            .bus_times {
                display: grid;
                grid-template-columns: repeat(9, 1fr);
                grid-gap: 5px;
                width: 100%;
                margin-bottom: 20px;
            }
            .bus_time_icon{
                grid-column: span 3;
                text-align: center;
            }
            .bus_time{
                grid-column: span 3;
                text-align: center;
                margin-top: 4px;
            }
            .bus_times_header{
                display: grid;
                grid-template-columns: repeat(9, 1fr);
                grid-gap: 5px;
                width: 100%;
                margin-bottom: 7px;
            }
            .bus_times_header_route{
                grid-column: span 8;
                text-align: left;
            }
            .bus_times_header_countdown{
                grid-column: span 9;
                text-align: right;
                margin-right: 5%;
            }
        `;
            this.appendChild(style);
            this.appendChild(card);
        }

        const entityId = this.config.entity;
        const state = hass.states[entityId];

        //console.log(this.config.entities);
        //console.log(hass.states);
        const stateStr = state ? state.state : 'unavailable';

        var tmpcontent = "";

        this.config.entities.forEach(function (item, index) {
            console.log(hass.states[item["entity"]]);
            console.log(item, index);
            if (hass.states[item["entity"]]) {
                if (hass.states[item["entity"]].attributes) {

                    var now = new Date().getTime();
                    
                    var countDownDatebus_0next1 = new Date(hass.states[item["entity"]].attributes.bus_0next1).getTime();
                    var distance_0next1 = countDownDatebus_0next1 - now;
                    var minutes_0next1 = Math.floor((distance_0next1) / (1000 * 60));
                    if (minutes_0next1 == 0) {
                        minutes_0next1 = "<1"
                    }
                    if (minutes_0next1 < 0) {
                        minutes_0next1 = "- -"
                    }

                    var countDownDatebus_0next2 = new Date(hass.states[item["entity"]].attributes.bus_0next2).getTime();
                    var distance_0next2 = countDownDatebus_0next2 - now;
                    var minutes_0next2 = Math.floor((distance_0next2) / (1000 * 60));
                    if (minutes_0next2 == 0) {
                        minutes_0next2 = "<1"
                    }
                    if (minutes_0next2 < 0) {
                        minutes_0next2 = "- -"
                    }
                    
                    var countDownDatebus_1next1 = new Date(hass.states[item["entity"]].attributes.bus_1next1).getTime();
                    var distance_1next1 = countDownDatebus_1next1 - now;
                    var minutes_1next1 = Math.floor((distance_1next1) / (1000 * 60));
                    if (minutes_1next1 == 0) {
                        minutes_1next1 = "<1"
                    }
                    if (minutes_1next1 < 0) {
                        minutes_1next1 = "- -"
                    }

                    var countDownDatebus_1next2 = new Date(hass.states[item["entity"]].attributes.bus_1next2).getTime();
                    var distance_1next2 = countDownDatebus_1next2 - now;
                    var minutes_1next2 = Math.floor((distance_1next2) / (1000 * 60));
                    if (minutes_1next2 == 0) {
                        minutes_1next2 = "<1"
                    }
                    if (minutes_1next2 < 0) {
                        minutes_1next2 = "- -"
                    }
                    var countDownDatebus_2next1 = new Date(hass.states[item["entity"]].attributes.bus_2next1).getTime();
                    var distance_2next1 = countDownDatebus_2next1 - now;
                    var minutes_2next1 = Math.floor((distance_2next1) / (1000 * 60));
                    if (minutes_2next1 == 0) {
                        minutes_2next1 = "<1"
                    }
                    if (minutes_2next1 < 0) {
                        minutes_2next1 = "- -"
                    }

                    var countDownDatebus_2next2 = new Date(hass.states[item["entity"]].attributes.bus_2next2).getTime();
                    var distance_2next2 = countDownDatebus_2next2 - now;
                    var minutes_2next2 = Math.floor((distance_2next2) / (1000 * 60));
                    if (minutes_2next2 == 0) {
                        minutes_2next2 = "<1"
                    }
                    if (minutes_2next2 < 0) {
                        minutes_2next2 = "- -"
                    }
                    var countDownDatebus_3next1 = new Date(hass.states[item["entity"]].attributes.bus_3next1).getTime();
                    var distance_3next1 = countDownDatebus_3next1 - now;
                    var minutes_3next1 = Math.floor((distance_3next1) / (1000 * 60));
                    if (minutes_3next1 == 0) {
                        minutes_3next1 = "<1"
                    }
                    if (minutes_3next1 < 0) {
                        minutes_3next1 = "- -"
                    }

                    var countDownDatebus_3next2 = new Date(hass.states[item["entity"]].attributes.bus_3next2).getTime();
                    var distance_3next2 = countDownDatebus_3next2 - now;
                    var minutes_3next2 = Math.floor((distance_3next2) / (1000 * 60));
                    if (minutes_3next2 == 0) {
                        minutes_3next2 = "<1"
                    }
                    if (minutes_3next2 < 0) {
                        minutes_3next2 = "- -"
                    }

                    tmpcontent = tmpcontent + `
                        <div class="bus_times_header">
                            <div class="bus_times_header_route">${hass.states[item["entity"]].attributes.bus_0}</div>
                        </div>
                        <div class="bus_times">
                            <div class="bus_time_icon"><ha-icon icon="mdi:bus"></ha-icon></div>
                            <div class="bus_time">${minutes_0next1} min </div>
                            <div class="bus_time">${minutes_0next2} min </div>
                        </div>

                        <div class="bus_times_header">
                            <div class="bus_times_header_route">${hass.states[item["entity"]].attributes.bus_1}</div>
                        </div>
                        <div class="bus_times">
                            <div class="bus_time_icon"><ha-icon icon="mdi:bus"></ha-icon></div>
                            <div class="bus_time">${minutes_1next1} min </div>
                            <div class="bus_time">${minutes_1next2} min</div>
                        </div>

                        <div class="bus_times_header">
                            <div class="bus_times_header_route">${hass.states[item["entity"]].attributes.bus_2}</div>
                        </div>
                        <div class="bus_times">
                            <div class="bus_time_icon"><ha-icon icon="mdi:bus"></ha-icon></div>
                            <div class="bus_time">${minutes_2next1} min </div>
                            <div class="bus_time">${minutes_2next2} min</div>
                        </div>

                        <div class="bus_times_header">
                            <div class="bus_times_header_route">${hass.states[item["entity"]].attributes.bus_3}</div>
                        </div>
                        <div class="bus_times">
                            <div class="bus_time_icon"><ha-icon icon="mdi:bus"></ha-icon></div>
                            <div class="bus_time">${minutes_3next1} min </div>
                            <div class="bus_time">${minutes_3next2} min</div>
                        </div>
                        `;
                }
            }



        });

        this.content.innerHTML = tmpcontent;


    }

    

    setConfig(config) {
        if (!config.entities) {
            throw new Error("You need to define entities");
        }
        this.config = config;
    }



    // The height of your card. Home Assistant uses this to automatically
    // distribute all cards over the available columns.
    getCardSize() {
        return 2;
    }

}

customElements.define('tisseo-card', TisseoCard);
