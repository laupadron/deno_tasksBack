import mongoose from 'npm:mongoose'

try {
   const db =  await mongoose.connect('mongodb://localhost/taskdb');
    console.log('data base is connected', db.connection.name)
} catch (error) {
    console.error(error);   
}