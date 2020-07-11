var name;
var email;
var answer1, answer2, answer3;

class Form{
    constructor(){
        

        this.title = createElement('h2');
        this.q1 = createElement('h3');
        this.q2 = createElement('h5');
        this.q3 = createElement('h4');
        this.finish = createElement('h4');
        this.reachOut = createElement('h5');
        
        this.inputA = createInput("Email");
        this.inputB = createInput("First Name");
        this.inputC = createInput("Last Name");
        this.inputD = createInput("State");
        this.inputE = createInput("District/City");

        this.buttonA = createButton('Start');
    }
    
    
    display(){
        this.title.html("Indian Pollution Control Party");
        this.title.position(130,0);

        this.inputA.position(340,110);
        this.inputB.position(340,135);
        this.inputC.position(340,160);
        this.inputD.position(340,185);
        this.inputE.position(340,210);

        this.buttonA.position(390,260);

        this.buttonA.mousePressed(()=>{
            this.inputA.hide();
            this.inputB.hide();
            this.inputC.hide();
            this.inputD.hide();
            this.inputE.hide();

            this.buttonA.hide();

            this.q1.html("How much do you litter on a daily basis?");
            this.q1.position(250,100);

            this.inputF = createInput("Answer");
            this.inputF.position(350,260);

            this.buttonB = createButton('Next');
            this.buttonB.position(390,320);

            this.buttonB.mousePressed(()=>{
                this.q1.hide();
                this.inputF.hide();
                this.buttonB.hide();

                this.q2.html("How much trash/litter do you pick up and throw away usually?");
                this.q2.position(250,100);

                this.inputG = createInput("Answer");
                this.inputG.position(350,260);

                this.buttonC = createButton('Next');
                this.buttonC.position(390,320);

                this.buttonC.mousePressed(()=>{
                    this.q2.hide();
                    this.inputG.hide();
                    this.buttonC.hide();

                    this.q3.html("Finally, would you say your area/town is messy or clean?");
                    this.q3.position(225,100);

                    this.inputH = createInput("Answer");
                    this.inputH.position(350,260);

                    this.buttonD = createButton('Finish');
                    this.buttonD.position(390,320);

                    this.buttonD.mousePressed(()=>{
                        this.q3.hide();
                        this.inputH.hide();
                        this.buttonD.hide();

                        this.finish.html("Thank you for participating in this survey.");
                        this.finish.position(250,150);

                        this.reachOut.html("We will be reaching to you soon on any events and challenges!");
                        this.reachOut.position(250,200);

                        name = this.inputB.value();
                        console.log(name);
                        
                        email = this.inputA.value();
                        console.log(email);
                        
                        answer1 = this.inputF.value();
                        console.log(answer1);
                        
                        answer2 = this.inputG.value();
                        console.log(answer2);

                        answer3 = this.inputH.value();
                        console.log(answer3);
                    })
                })
            })
        })
    }
}