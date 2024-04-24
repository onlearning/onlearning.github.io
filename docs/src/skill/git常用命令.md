<!-- 1、基本配置

配置提交人姓名：git config --global user.name 提交人姓名
配置提交人邮箱：git config --global user.email 提交人邮箱
查看 git 配置信息：git config --list
2、提交及拉取

提交：git push
拉取：git pull
强行覆盖远程分支提交：git push -f
变基拉取：git pull --rebase 3. 删除本地分支

git branch -d <branch_name>
4、如果想要删除多个分支，可以将它们的名称用空格分隔：

git branch -d <branch_name1> <branch_name2> ...
注意，使用 -d 选项时，如果尝试删除当前所在的分支，Git 会拒绝删除并显示错误消息。如果你确定要删除当前分支，请使用 -D 选项来强制删除。

5、同时删除本地和远程分支

git push <remote_name> --delete <branch_name>
6、已经删除的远程分支，本地仓库仍然会保留对这些远程分支的引用。

git remote prune origin
7、将修改记录提交到上一次 commit
git add .
git commit --amend
:q
或者
:wq
退出
如果需要修改 commit 的备注 在 git commit --amend
出现有注释的界面（你的注释应该显示在第一行）
输入 i 进入修改模式，修改好注释后，按 Esc 键 退出编辑模式，输入:wq 保存并退出。 -->
