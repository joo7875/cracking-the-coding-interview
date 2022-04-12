// motorcycle = small
// car = medium, large
// bus = 3 consecutive large

class Level {
    constructor(small, medium, large) {
        this.small = small;
        this.medium = medium;
        this.large = large;
    }
}

class ParkingLot {
    constructor() {
        this.parking = [];
        this.level = 0;
    }

    addLevel() {
        this.parking.push(new Level(0, 0, 0));
        this.parking.push(new Level(0, 0, 0));
        this.parking.push(new Level(3, 0, 3));

        this.level = this.parking.length;
    }

    park(vehicle) {
        if (this.level > 0) {

            let cur = 0;

            switch(vehicle) {
                case 'motorcycle':
                    while (cur < this.level) {
                        if (this.parking[cur].small > 0) {
                            this.parking[cur].small -= 1;
                            return 'motorcycle parked';
                        }
                        else cur += 1;
                    }
                    return 'no spot for motorcycle';

                case 'car':
                    while (cur < this.level) {
                        if (this.parking[cur].medium > 0) {
                            this.parking[cur].medium -= 1;
                            return 'car parked';
                        }
                        else if (this.parking[cur].large > 0) {
                            this.parking[cur].large -= 1;
                            return 'car parked';
                        }
                        else cur += 1;
                    }
                    return 'no spot for car';

                case 'bus':
                    while (cur < this.level) {
                        if (this.parking[cur].large >= 3) {
                            this.parking[cur].large -= 3;
                            return 'bus parked';
                        }
                        else cur += 1;
                    }
                    return 'no spot for bus';
            }
        }
        else console.log('parking lot does not exist');
    }
}

let parking = new ParkingLot();

parking.addLevel();
console.log(parking.park('motorcycle'));
console.log(parking.park('car'));
console.log(parking.park('bus'));

console.log(parking)