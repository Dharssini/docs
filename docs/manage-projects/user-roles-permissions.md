---
title: User Roles & Permissions
sidebar_label: User Roles
---

When OpenFn Users are invited to work on your Project as `Collaborators`, they are assigned a `Role` that determines their permissions. The four available Roles are: Owner (**only 1 per project**), Admin, Editor & Viewer. Check out the table below for the permissions available to each role.

|Context | Action    | Owner | Admin |     Editor      | Viewer | 
| :--------| :-------- | :--: | :------------: | :----------: | :----------: |
| Workflows| Create a Workflow  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x: |"
| Workflows| Edit a Job in a Workflow  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x: |"
| Workflows| Add/remove webhook authentication method for Workflow  | :heavy_check_mark: | :heavy_check_mark: | :x: | :x: |"
| Workflows| Delete a Workflow  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x: |"
| Workflows| Run from the Inspector  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x: |"
| Workflows| Select the 5 latest Inputs for a Job in a Workflow  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x: |"
| History| View/search/filter on the History page  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |"
| History| View a Run from the Work Order history  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |"
| History| View a Input from a Work Order history  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |"
| History| Run from the Work Order history  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x: |"
| Settings| View Project name  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |"
| Settings| Edit Project name  | :heavy_check_mark: | :heavy_check_mark: | :x: | :x: |"
| Settings| View Project description  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |"
| Settings| Edit Project description  | :heavy_check_mark: | :heavy_check_mark: | :x: | :x: |"
| Settings| Export Project  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |"
| Settings| Delete a Project  | :heavy_check_mark: | :x: | :x: | :x: |"
| Settings| View Project Credentials, type, and owner  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |"
| Settings| Add/remove webhook authentication method for Project  | :heavy_check_mark: | :heavy_check_mark: | :x: | :x: |"
| Settings| Change MFA requirement for Project  | :heavy_check_mark: | :heavy_check_mark: | :x: | :x: |"
| Settings| Add Project Collaborator  | :heavy_check_mark: | :heavy_check_mark: | :x: | :x: |"
| Settings| View Project Collaborators (project_users, role, digest and alerts)  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |"
| Settings| Edit digest and alerts for themselves  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |"
| Settings| Edit digest and alerts for others  | :x: | :x: | :x: | :x: |"
| Settings| Change Input/Output Dataclip storage policy  | :heavy_check_mark: | :heavy_check_mark: | :x: | :x: |"
| Settings| Change History retention period  | :heavy_check_mark: | :heavy_check_mark: | :x: | :x: |"
| Settings| Update GitHub project/repo connection  | :heavy_check_mark: | :heavy_check_mark: | :x: | :x: |"
| Settings| Initiate GitHub sync  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x: |"

Contact your app's super admin if you need to add/remove project collaborators or modify a user's role. 
