# 700 - MongoDB

## 100 - MongoDB Schema for Innovation Management Microservice

### On Sliplane

Create a New Team: "Innovation Management".

Create a New Project "Innovation Management".

<img width="1436" height="536" alt="Image" src="https://github.com/user-attachments/assets/6faa20f9-e73f-4d8a-a784-4ce37c93616f" />

<img width="625" height="309" alt="Image" src="https://github.com/user-attachments/assets/9d6fb310-a79f-492c-9d35-4c64f01d175a" />

Add a Service, choose from the templates: MongoDB.

### On Docker Hub

Create a Personal Access Token on Docker Hub for use by Innovation Management:

<img width="957" height="822" alt="Image" src="https://github.com/user-attachments/assets/b3711f32-e086-43b3-b2bd-cdfffa75ede4" />

<img width="1247" height="835" alt="Image" src="https://github.com/user-attachments/assets/f0afe8db-8d6a-4af3-a466-e2177e22cf9e" />

### On Sliplane

Deploy a New Service:

<img width="1447" height="530" alt="Image" src="https://github.com/user-attachments/assets/c7616905-2e62-44e1-8437-21a9c7eb48ae" />

Use the Personal Access Token on Docker Hub to register Docker Hub with Sliplane:

<img width="1054" height="816" alt="Image" src="https://github.com/user-attachments/assets/927ed478-514a-45ae-90c8-cb60d3362d12" />

Deploy the MongoDB Service on Sliplane for Innovation Management:

<img width="1193" height="1103" alt="Image" src="https://github.com/user-attachments/assets/09784787-0133-41b9-8355-535ae10f01ee" />

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
