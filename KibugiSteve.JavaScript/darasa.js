// node darasa.js
// darasa constructor function
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
