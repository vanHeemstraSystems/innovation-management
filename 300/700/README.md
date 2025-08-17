# 700 - MongoDB

## 100 - MongoDB Schema for Innovation Management Microservice

### On Sliplane

Create a New Team: "Innovation Management".

Create a New Project "Innovation Management".

<img width="1436" height="536" alt="Image" src="https://github.com/user-attachments/assets/6faa20f9-e73f-4d8a-a784-4ce37c93616f" />

<img width="625" height="309" alt="Image" src="https://github.com/user-attachments/assets/9d6fb310-a79f-492c-9d35-4c64f01d175a" />

Deploy a New Service:

<img width="1447" height="530" alt="Image" src="https://github.com/user-attachments/assets/c7616905-2e62-44e1-8437-21a9c7eb48ae" />

Create a New Server:

<img width="1191" height="446" alt="Image" src="https://github.com/user-attachments/assets/1c2b3478-b81e-4495-bd59-d77c33eb9b6b" />

Choose a Location and Size for your New Server:

<img width="593" height="683" alt="Image" src="https://github.com/user-attachments/assets/d360069a-c712-4075-8f93-b352e681635f" />

Select the Newly Created Server:

<img width="1201" height="463" alt="Image" src="https://github.com/user-attachments/assets/298ac99f-8f8a-4116-8900-f3cd6105eab4" />

Choose from the templates: MongoDB.

<img width="1199" height="1095" alt="Image" src="https://github.com/user-attachments/assets/56256681-b4c8-42ee-a0e0-439219f2cc37" />

Select Credential:

<img width="1189" height="1101" alt="Image" src="https://github.com/user-attachments/assets/d3b9ee48-6200-4243-a21f-0b77a147d984" />

In case of no previous Credential, Add Credential:

<img width="1400" height="444" alt="Image" src="https://github.com/user-attachments/assets/c8431bdf-6c1b-4e65-9cbf-7db507db1a8b" />

Add Registry Credential, here Docker Hub:

<img width="592" height="552" alt="Image" src="https://github.com/user-attachments/assets/0ac42f4d-6443-4895-b6c1-d2b5aa266a68" />

### On Docker Hub

Create a Personal Access Token on Docker Hub for use by Innovation Management:

<img width="957" height="822" alt="Image" src="https://github.com/user-attachments/assets/b3711f32-e086-43b3-b2bd-cdfffa75ede4" />

<img width="1247" height="835" alt="Image" src="https://github.com/user-attachments/assets/f0afe8db-8d6a-4af3-a466-e2177e22cf9e" />

### On Sliplane

Use the Personal Access Token on Docker Hub to register Docker Hub with Sliplane:

<img width="587" height="548" alt="Image" src="https://github.com/user-attachments/assets/2962a80d-b9c4-42da-a36b-0f5048b69315" />

New Credential "Innovation Management" for DockerHub added:

<img width="1395" height="480" alt="Image" src="https://github.com/user-attachments/assets/3541b3d8-7bb1-4879-a0e3-ffc7877be2e0" />

<OLD img width="1054" height="816" alt="Image" src="https://github.com/user-attachments/assets/927ed478-514a-45ae-90c8-cb60d3362d12" / OLD>

Deploy the MongoDB Service on Sliplane for Innovation Management:

<img width="1186" height="1104" alt="Image" src="https://github.com/user-attachments/assets/f78f6390-cf7f-49b2-81d1-337ae4f2da7b" />

<OLD img width="1193" height="1103" alt="Image" src="https://github.com/user-attachments/assets/09784787-0133-41b9-8355-535ae10f01ee" / OLD>

<img width="1468" height="484" alt="Image" src="https://github.com/user-attachments/assets/b97b1a05-f6cd-4343-bf1a-9fa9de37784b" />

MongoDB on Sliplane can now be reached as follows:

- Connect to: mongo-3arg.sliplane.app:10563

- Root Username: admin

- Root Password: **************



MORE

### Prerequisites

- Pipedream account with Pro plan (for MongoDB integration)
- Kamatera MongoDB instance running MongoDB 5.0+
- OpenAI API key with GPT-4 access
- Basic knowledge of JavaScript/Node.js

### Step 1: MongoDB Setup

1. **Connect to your Kamatera MongoDB instance:**

Your Kamatera MongoDB credentials:

```
Host: your-kamatera-mongodb-host
Port: 27017
Database: innovation_db
Username: your_username
Password: your_password
```

```bash
mongo mongodb://your-kamatera-mongodb-host:27017/innovation_db
```

1. **Run the schema creation script:**

```javascript
// Copy and paste the MongoDB schema code from the previous artifact
// This will create collections with validation rules and indexes
```

See file: mongodb/mongodb-innovation-schema.js


1. **Verify collections are created:**

```bash
db.listCollections()
```
