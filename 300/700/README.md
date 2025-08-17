# 700 - MongoDB

## 100 - MongoDB Schema for Innovation Management Microservice

Create a Personal Access Token on Docker Hub for use by Innovation Management:

<img width="957" height="822" alt="Image" src="https://github.com/user-attachments/assets/b3711f32-e086-43b3-b2bd-cdfffa75ede4" />

<img width="1247" height="835" alt="Image" src="https://github.com/user-attachments/assets/f0afe8db-8d6a-4af3-a466-e2177e22cf9e" />

Use the Personal Access Token on Docker Hub to register Docker Hub with Sliplane:

<img width="1054" height="816" alt="Image" src="https://github.com/user-attachments/assets/927ed478-514a-45ae-90c8-cb60d3362d12" />



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
