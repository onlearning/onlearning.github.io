# JDK 安装

## JDK JRE JVM 介绍

JDK：Java Development Kit（Java 开发者工具，包含 JRE,JVM）

JRE：Java Runtime Enviroment（Java 运行环境）

JVM：Java Virtual Machine（Java 虚拟机）

## JDK 安装及卸载

### 安装

搜索 JDK8（orcal 官网）

下载电脑对应版本

双击安装

记住安装路径

配置环境变量

右键我的电脑属性

进入环境变量添加 Javahome

配置 Path 变量

新增%JAVA_HOME%\bin

新增%JAVA_HOME%\jre\bin

cmd 输入 java -version 测试是否安装成功

### 卸载

删除 JAVA 安装目录，我的电脑->属性->高级系统设置->环境变量

找到 JAVAHOME,按住 shift+del 彻底删除并删除其他有 JAVAHOME 相关文件（path 里面也有 ）

在命令中输入 java -version 查看是否能运行
