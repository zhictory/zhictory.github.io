---
layout: single
title: MySQL Community Server 8.0.11 安装教程
---

> 原文：[MySQL 8.0 Windows zip 安装过程](https://blog.csdn.net/zwj1030711290/article/details/80039780)

首先下载 MySQL Community Server 8.0.11：[https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/)

接着配置：在安装根目录下添加 my.ini，比如我这里是：D:\Program Files\MySQL\my.ini，写入基本配置：

```shell
[mysqld]
# Remove leading # and set to the amount of RAM for the most important data
# cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.
# innodb_buffer_pool_size = 128M

# Remove leading # to turn on a very important data integrity option: logging
# changes to the binary log between backups.
# log_bin

# These are commonly set, remove the # and set as required.
basedir = D:\Program Files\MySQL
datadir = D:\Program Files\MySQL\data
port = 3306
# server_id = .....


# Remove leading # to set options mainly useful for reporting servers.
# The server defaults are faster for transactions and fast SELECTs.
# Adjust sizes as needed, experiment to find the optimal values.
# join_buffer_size = 128M
# sort_buffer_size = 2M
# read_rnd_buffer_size = 2M

sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES

character-set-server = utf8mb4

performance_schema_max_table_instances = 600
table_definition_cache = 400
table_open_cache = 256

[mysql]
default-character-set = utf8mb4

[client]
default-character-set = utf8mb4
```

接着初始化数据库：

```shell
mysqld --initialize --console
```

初始化的时候会输出日志：

```shell
2018-06-18T11:11:42.523486Z 0 [Warning] [MY-010915] [Server] 'NO_ZERO_DATE', 'NO_ZERO_IN_DATE' and 'ERROR_FOR_DIVISION_BY_ZERO' sql modes should be used with strict mode. They will be merged with strict mode in a future release.
2018-06-18T11:11:42.535721Z 0 [System] [MY-013169] [Server] D:\Program Files\MySQL\bin\mysqld.exe (mysqld 8.0.11) initializing of server in progress as process 13036
2018-06-18T11:12:14.577258Z 5 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: Vwa5C>>pDVh)
2018-06-18T11:12:44.048693Z 0 [System] [MY-013170] [Server] D:\Program Files\MySQL\bin\mysqld.exe (mysqld 8.0.11) initializing of server has completed
```

其中 `Vwa5C>>pDVh)` 是初始密码。

然后安装服务：

```shell
mysqld --install
```

再启动服务：

```shell
net start mysql
```

最后登录 MySQL Community Server 修改密码：

```shell
# 先用初始密码登录
mysql -uroot -p
```

修改密码的时候要注意 MySQL Community Server版本之间的区别：

```shell
# MySQL 8.0.4 及以前
SET PASSWORD=PASSWORD(<password>);

# MySQL 8.0.4 以后
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY <password>;
```

这个区别是 MySQL 的密码认证插件的变化造成的，如果想默认使用 mysql_native_password 插件认证，可以在 my.ini 中配置 default_authentication_plugin 项：

```shell
[mysqld]
default_authentication_plugin=mysql_native_password
```