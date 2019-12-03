class Bot {
    x = 0
    y = 0
    direction = 1
    directionNames = ['North', 'East', 'South', 'West']

    main = (input) => {
        const str = input.toUpperCase()
        const count_str = str.length
        try {
            for (let i = 0; i < count_str; i++) {
                let c = str[i]
                switch (c) {
                    case 'R':
                        this.turn_right()
                        break
                    case 'L':
                        this.turn_left()
                        break
                    case 'W':
                        let steps = ''
                        while (count_str > i++) {
                            steps += str[i]
                        }
                        i--
                        if (steps) {
                            this.walk(steps);
                        }
                        break
                }

            }
            return this.get_position()
        } catch (err) {
            console.log(err.message)
        }

    }

    turn_right = () => {
        if (5 === ++this.direction) {
            this.direction = 1
        }
    }

    turn_left = () => {
        if (0 === --this.direction) {
            this.direction = 4
        }
    }

    walk = (steps) => {
        steps = parseInt(steps)
        try {
            switch (this.direction) {
                case 1:
                    this.y += steps
                    break
                case 2:
                    this.x += steps
                    break
                case 3:
                    this.y -= steps
                    break
                case 4:
                    this.x -= steps
                    break
            }

        } catch (err) {
            console.log(err.message)
        }
    }

    get_position = () => {
        console.log(`X: ${this.x} Y: ${this.y}  Direction: ${this.directionNames[this.direction]}`)
    }

}

if (process.argv[2]) {
    const maqe_bot = new Bot()
    maqe_bot.main(process.argv[2])
}