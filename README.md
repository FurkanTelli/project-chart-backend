
Bilgilendirme :
------------------

- Projede veri abanı olarak mssql kullanılmıştır. Kütüphane olarak; Sequelize,cors,express,tedious kullanılmıştır.
- Web sunucusu, rest api ve middleware uygulamaları için projede express.js kütüphanesi kullanılmıştır.
- Proje içerinde kullanmış olduğum sequelize kütüphanesi doğruda windows authentication desteği sağlamadığı için sql login tipinde yeni bir connection oluşturdum. Ve server bağlantılısı için tedious kütüphanesini kurdum projeme. Bunu yapmamın sebebi kendi belirlediğim kullanıcı adı ve şifre ile authentication işlemini yapabilmek için.
- Sql login girişi için tüm şartları elverişli hale getirdikten sonra SQL Server Configuration Manager üzerinden restart işlemi gerçekleştirildi.
- Yedekleme dosyasını projenin içerisindeki "database_backup\chartstudents.bak" yolunda tutuyorum. Dilerseniz,
RESTORE DATABASE [chartstudents] FROM DISK = 'C:\Users\pc\Desktop\projectChartBackend\database_backup\chartstudents.bak' script'i ile kullanabilirsiniz

Projeyi çalıştırmak için Terminale bu komutları yazın : 
- npm install 
- node index

![image alt](https://github.com/FurkanTelli/project-chart-backend/blob/b9beb8743d9c6542ee2ded405a1bacf705aafc0e/SequelizeIcinAuthenticationIc%C4%B1n.png)
![image alt](https://github.com/FurkanTelli/project-chart-backend/blob/b9beb8743d9c6542ee2ded405a1bacf705aafc0e/sqlServerRestart.png)

Information:
-----------------

- MSSQL was used as the database in the project. The libraries used were Sequelize, Cors, Express, and Tedious.
- The Express.js library was used for the web server, REST API, and middleware actions.
- Because the Sequelize library I used in the project didn't provide direct Windows authentication support, I created a new SQL login connection. I installed the Tedious library for the server connection in my project. I did this so I could authenticate with a username and password I specified.
- After ensuring all the SQL login requirements were met, I restarted the SQL Server Configuration Manager.
- I keep the backup file in the "database_backup\chartstudents.bak" path within the project. If you wish, you can use the script RESTORE DATABASE [chartstudents] FROM DISK = 'C:\Users\pc\Desktop\projectChartBackend\database_backup\chartstudents.bak'

To run the project, type these commands in Terminal:
- npm install
- node index

![image alt](https://github.com/FurkanTelli/project-chart-backend/blob/b9beb8743d9c6542ee2ded405a1bacf705aafc0e/SequelizeIcinAuthenticationIc%C4%B1n.png)
![image alt](https://github.com/FurkanTelli/project-chart-backend/blob/b9beb8743d9c6542ee2ded405a1bacf705aafc0e/sqlServerRestart.png)
