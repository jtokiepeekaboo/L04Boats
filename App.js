import React from 'react';
import {ScrollView} from 'react-native';
import Boat from './components/Boat.js';

class AllBoats extends React.Component {
    render() {
        return (
            //Enable scrolling
            <ScrollView>
                <Boat
                    name={"Sea Ray 500 Sundancer"}
                    description={"Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."}
                    icon_name={"sailboat"}
                    icon_color={"blue"}
                    poster={require('./images/sea_ray.jpg')}
                />

                <Boat
                    name={"Four Winns Horizon 180"}
                    description={"A sporty look and refined details truly set the Horizon 180 above all others."}
                    icon_name={"sailboat"}
                    icon_color={"green"}
                    poster={require('./images/four_winns.jpg')}
                />

                <Boat
                    name={"Flipper 640 ST"}
                    description={"A modern take on the classic, traditional hardtop and perfect for a family picnic."}
                    icon_name={"sailboat"}
                    icon_color={"red"}
                    poster={require('./images/flipper.jpg')}
                />

                <Boat
                    name={"Princess V48"}
                    description={"There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."}
                    icon_name={"sailboat"}
                    icon_color={"purple"}
                    poster={require('./images/princess.jpg')}
                />

                <Boat
                    name={"Bayliner 175 Bowrider"}
                    description={"Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."}
                    icon_name={"sailboat"}
                    icon_color={"orange"}
                    poster={require('./images/bayliner.jpg')}
                />

                <Boat
                    name={"Fairline Targa 47"}
                    description={"Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."}
                    icon_name={"sailboat"}
                    icon_color={"black"}
                    poster={require('./images/fairline.jpg')}
                />
            </ScrollView>
        );
    }
}

export default AllBoats;