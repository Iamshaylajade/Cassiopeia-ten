const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle, Polygon} = require('./main/lib/shapes')
const questions = require('./main/lib/questions')


const init = () => {
    inquirer.prompt(questions)
        .then((data) => {
            console.log("Creating svg file...");
            switch (`${data.shape}`) {
                case 'Square':
                    console.log('Square is being Created....')
                    const square = new Square(data.fill, data.stroke, data.strokeWidth, data.text, data.textColor,
                        data.width, data.width)
                        fs.writeFile("main/output/logo.svg", square.renderSquare(), (err) => {
                            if (err) {
                                console.error(err);
                            } else {
                                console.log('Congratulations Square is created')
                            }
                        })
            }
        })

}


