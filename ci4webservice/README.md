# ci4webservice RestAPI Web Service

### Teknologi

* CodeIgniter 4
* MySQL 


### Installasi Aplikasi

* git clone & buka ci4webservice di text editor / IDE
```
git clone https://gitlab.com/PradanaIN/ppk-uas.git
```
* install composer
```
composer install
```
* apabila terjadi error, update composer
```
composer update
```
* import database [ppk_uas.sql](https://gitlab.com/PradanaIN/ppk-uas/-/blob/main/ppk_uas.sql) atau migrasi database (pastikan sudah memiliki tabel database ppk_uas)
```
php spark migrate
```
```
php spark migrate:refresh
```
```
php spark db:seed DatabaseSeeder
```
* restapi/webservice siap digunakan

## Test Account
| role  | email  | password |
| :------------: |:---------------:| :-----:|
| admin      | admin@gmail.com | 12345678 |
| user      | pradana@gmail.com     |   12345678 |

## Developer
```
Nama : Novanni Indi Pradana
NIM  : 222011436
Kelas: 3SI3
```
