// const { MongoClient } = require('mongodb');

// async function connectToMongoDB() {
//     const uri = 'mongodb://localhost:27017'; // URI подключения к вашей базе данных
//     const client = new MongoClient(uri);
  
//     try {
//       await client.connect();
//       console.log('Соединение с MongoDB успешно установлено');
  
//       // Получаем ссылку на коллекцию
//       const collection = client.db('cardCreateCollection').collection('shopCard');
  
//       // Выполняем запрос к базе данных
//       const data = await collection.find({}).toArray();
  
//       // Возвращаем данные по умолчанию
//       return data;
      
//     } catch (error) {
//       console.error('Ошибка подключения к MongoDB:', error);
//     } finally {
//       // Закрываем соединение с базой данных после завершения работы
//       await client.close();
//       console.log('Соединение с MongoDB закрыто');
//     }
//   }
  
//   export default connectToMongoDB;