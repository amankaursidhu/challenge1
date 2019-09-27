db.serialize(function() {
    // Queries scheduled here will be serialized.
    db.run("create database a3")});
    
    db.serialize(function() {
    // Queries scheduled here will be serialized.
    db.run("use a3")});
    
    db.serialize(function() {
    // Queries scheduled here will be serialized.
    db.run("CREATE TABLE students(studentid VARCHAR(20)),studentname VARCHAR(20),programgroup VARCHAR(20)")
    });
    
    db.serialize(function() {
    // Queries scheduled here will be serialized.
    db.run("CREATE TABLE classes(classid VARCHAR(20),classname VARCHAR(20),room VARCHAR(20)")
    });
    
    db.serialize(function() {
    // Queries scheduled here will be serialized.
    db.run("CREATE TABLE enrollment (enrollmentid VARCHAR(20), studentid VARCHAR(20), classid VARCHAR(20)")
    });
    
    db.serialize(function() {
    // Queries scheduled here will be serialized.
    db.run("use a3")});
    
    db.serialize(function() {
    // Queries scheduled here will be serialized.
    db.run("insert into students (studentid, studentname, programgroup) values ('742135','Amandeepkaursidhu','CSAT');")});
    
    db.serialize(function() {
    // Queries scheduled here will be serialized.
    db.run("use a3")});
    
    
    db.serialize(function() {
    // Queries scheduled here will be serialized.
    db.run("insert into classes (classid, classname, room, datesession) values ('CSD_3313_4','WEBTECH3','B230', 'FRI PM');")});
    
    console.log(msg);
