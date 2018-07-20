// darasa class constructor
function Darasa(member = ["member1", "member2", "member3"]) {

    this.member = member;

    // method to add a class member
    this.addClassMember = function(newMember) {
        for(var findMember in this.member) {
            if (this.member[findMember] == newMember) {
                        console.log("member already registered, Try again");
                    }
                    else {
                        this.member.push(newMember);
                        return newMember + " added successfully";
                    }
        }

    };

    // method to remove a class member
    this.removeClassMember = function(memberName) {
        for(var findMember in this.member) {
           if (this.member[findMember] == memberName) {
            delete member[memberName];
            console.log(memberName + " successfully removed");

        }
        }


    };

    // listing class members
    this.getDarasamembers = function() {
        for(var findMember in this.member) {
            console.log(this.member[findMember]);
        }
    };
}

var standard1 = new Darasa();
var standard2 = new Darasa();
var standard3 = new Darasa();

function Shule(){
    this.shule = '';
    this.shuleName =  function(name) {
        return name;
    };
    this.className = {
        standard1: standard1,
        standard2: standard2,
        standard3: standard3
    };


};

// add a darasa to school registry
Shule.prototype.addDarasa = function(name, darasa) {
    this.name = name;
    this.darasa = darasa;
    this.darasaName = function() {
        return this.name;
    }
};

// remove a darasa from a school registry
Shule.prototype.removeDarasa = function(name) {
    this.darasaName = name;
    delete className.darasaName;
};

// unmodified array of shuleName
Shule.prototype.getShule = function() {
    for(var myClassName in this.className) {
        var myArray = [];
        myArray.push(className[myClassName]);
        console.log(myArray);
        return this.shuleName;
    }

};





