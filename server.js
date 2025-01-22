const fs = require('fs')
const Read = () => {
    fs.readFile('student1.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        const json = JSON.parse(data)
        console.log(json)
    })
}
const newStudent = {
    id: 5,
    name: "Manoj",
    dept: "AIDS"
}
const Write = () => {
    fs.readFile('student1.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        const json = JSON.parse(data)
        const studentsList = [...json, newStudent]
        fs.writeFile('student1.json', JSON.stringify(studentsList), (err) => {
            if (err) {
                console.error(err)
                return
            }
            console.log("Written Successfully");
        })
    })
}
const Update = (id, newName) => {
    fs.readFile('student1.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        let json = JSON.parse(data);
        const studentIndex = json.findIndex(student => student.id === id);
        if (studentIndex !== -1) {
            json[studentIndex].name = newName;
            fs.writeFile('student1.json', JSON.stringify(json), (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log("Updated Successfully");
            });
        } else {
            console.log("Student Id not found");
        }
    });
};
const Delete = (id) => {
    fs.readFile('student1.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        const json = JSON.parse(data)
        const studentsList=json.filter( student => student.id != id)
        if(studentsList.length==json.length){
            console.log("Student ID not found");
            return;
        }
        fs.writeFile('student1.json', JSON.stringify(studentsList), (err) => {
            if (err) {
                console.error(err)
                return
            }
            console.log("Deleted Successfully");
        })
    })
}




//Read()
//Write()
//Update(5,"Boopathi")
//Delete(5)
