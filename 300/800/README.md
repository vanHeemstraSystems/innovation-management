# 800 - PipeDreams

## 100 - Pipedream Workflow: Innovation Management Microservice

See file: pipedream/innovation-management-workflow.js

### Prerequisites

- Pipedream account with Pro plan (for MongoDB integration)
- Sliplane MongoDB instance running MongoDB 5.0+
- OpenAI API key with GPT-4 access
- Basic knowledge of JavaScript/Node.js

### Step 1: Pipedream Workflow Setup

1. **Login to PipeDream:**
- Go to https://pipedream.com
- Login with email (here: ```wvanheemstra@icloud.com```) and password
2. **Create a New Project**
- Click **+ New Project**

<img width="1072" height="1007" alt="Image" src="https://github.com/user-attachments/assets/41df8ee9-45c2-447f-aa52-47ce8f23723e" />

We see that the already existing repository **vanHeemstraSystems/innovation-management** is recognized by PipeDream.

<img width="1072" height="1007" alt="Image" src="https://github.com/user-attachments/assets/790d3e73-ea40-419a-bca9-5d2cb20f9f94" />

1. **Create New Workflow in Pipedream:**
- Go to https://pipedream.com/workflows
- Click “New Workflow”

<img width="1059" height="1007" alt="Image" src="https://github.com/user-attachments/assets/ca30d6ed-cb02-4512-94dd-11712ab8c50b" />

- Make it part of the Project “Innovation Management”
- Branch used is: **main**
- Name the Workflow "Innovation Management"

<img width="1059" height="1007" alt="Image" src="https://github.com/user-attachments/assets/5da1e78f-9d7e-4158-a194-ab3e7b6c74a7" />

- Click **Create Workflow**

1. **Add HTTP Trigger:**

- Edit the Workflow "Innovation Management"

<img width="1059" height="1007" alt="Image" src="https://github.com/user-attachments/assets/f1aa43ff-0311-4529-8258-c3c0d7c2be4e" />

- Select “HTTP / Webhook” as trigger

<img width="1059" height="892" alt="Image" src="https://github.com/user-attachments/assets/5c2cd39b-9321-4bca-8360-4de5a39d12fe" />

<img width="1059" height="892" alt="Image" src="https://github.com/user-attachments/assets/cd7d5d40-2ad3-4e6c-ae34-093882c9fa98" />

- Copy the webhook URL for later use (here: https://eozj6mz2k37qn0a.m.pipedream.net)
- Configure to accept POST requests
1. **Add MongoDB App Connection:**
- In workflow settings, add “MongoDB” app
- Configure with your Sliplane MongoDB credentials:
  
  ```
  Host: your-sliplane-mongodb-host (here: )
  Port: 27017
  Database: innovation_db
  Username: your_username (here: admin)
  Password: your_password (here: *********)
  ```
1. **Add OpenAI App Connection:**
- Add “OpenAI” app in workflow settings
- Configure with your OpenAI API key
1. **Deploy the Workflow Code:**
- Copy the complete workflow code from the first artifact
- Paste into the Pipedream code editor
- Test the workflow

### Step 2: Environment Configuration

Add these environment variables in Pipedream:

```
MONGODB_CONNECTION_STRING=mongodb://your-sliplane-host:27017/innovation_db
OPENAI_API_KEY=your-openai-api-key
NODE_ENV=production
LOG_LEVEL=info
```

## 📡 API Documentation

### Base URL

```
https://your-pipedream-workflow-url.m.pipedream.net
```

### Authentication

Currently uses Pipedream’s built-in security. For production, add API key validation.

### Endpoints

#### 1. Create Innovation Strategy

**POST** `/`

Creates a new innovation strategy using AI-enhanced ODI methodology.

**Request Body:**

```json
{
  "trigger_type": "manual",
  "market_data": {
    "industry": "SaaS",
    "target_market_size": 1000000,
    "growth_rate": 0.15,
    "trends": ["AI automation", "remote work"]
  },
  "customer_data": {
    "feedback_sources": ["surveys", "support_tickets"],
    "pain_points": [
      {
        "pain": "Manual data entry is time-consuming",
        "frequency": 0.8,
        "intensity": 9
      }
    ],
    "feature_requests": [
      {
        "request": "Better automation",
        "votes": 150,
        "priority": 8
      }
    ]
  },
  "company_context": {
    "capabilities": ["software_development", "AI_ML"],
    "budget": 1000000,
    "timeline_months": 12,
    "team_size": 15
  }
}
```

**Response:**

```json
{
  "strategy_id": "507f1f77bcf86cd799439011",
  "status": "created",
  "confidence_score": 0.84,
  "market_opportunity_score": 8.7,
  "next_actions": [
    "validate_with_stakeholders",
    "conduct_customer_interviews", 
    "begin_project_planning"
  ],
  "estimated_market_size": 50000000,
  "top_opportunities": [
    {
      "outcome": "Reduce task completion time by 40%",
      "opportunity_score": 17.5
    },
    {
      "outcome": "Eliminate manual data entry",
      "opportunity_score": 16.8
    },
    {
      "outcome": "Improve decision-making speed",
      "opportunity_score": 15.2
    }
  ],
  "recommendation": "pursue"
}
```

#### 2. Trigger Market Scan (Scheduled)

**POST** `/?trigger_type=market_scan`

Automatically scans market sources for new opportunities.

**Request Body:**

```json
{
  "trigger_type": "market_scan",
  "scan_sources": ["industry_reports", "competitor_analysis", "social_media"],
  "focus_areas": ["AI", "automation", "productivity"]
}
```

#### 3. Process Customer Feedback

**POST** `/?trigger_type=customer_feedback`

Processes new customer feedback for opportunity identification.

**Request Body:**

```json
{
  "trigger_type": "customer_feedback",
  "feedback_data": {
    "source": "support_tickets",
    "date_range": "2024-01-01_to_2024-01-31",
    "feedback_items": [...]
  }
}
```

### Response Status Codes

- `200` - Success: Innovation strategy created/processed
- `400` - Bad Request: Invalid input data
- `429` - Rate Limited: Too many requests
- `500` - Internal Server Error: Processing failed

### Error Response Format

```json
{
  "error": "Error message description",
  "timestamp": "2024-01-15T10:30:00Z",
  "correlation_id": "uuid-for-tracking"
}
```

## 🔧 Configuration Options

### AI Model Configuration

```javascript
// In workflow code, modify these settings:
const AI_CONFIG = {
  model: "gpt-4",                    // or "gpt-4-turbo" 
  temperature: 0.3,                  // Lower = more focused
  max_tokens: 2000,                  // Adjust based on needs
  timeout_seconds: 120               // AI processing timeout
};
```

### ODI Process Configuration

```javascript
const ODI_CONFIG = {
  discovery_phase_days: 4,           // Market discovery duration
  validation_phase_days: 4,          // Validation phase duration  
  presell_phase_days: 4,             // Pre-sell testing duration
  strategy_phase_days: 2,            // Strategy formulation duration
  min_opportunity_score: 10.0,       // Minimum score to consider
  min_market_size: 1000000          // Minimum TAM to consider
};
```

### Validation Thresholds

```javascript
const VALIDATION_THRESHOLDS = {
  confidence_score_min: 0.7,         // Minimum AI confidence
  market_opportunity_min: 6.0,       // Minimum market score
  customer_validation_min: 7.0,      // Minimum validation score
  technical_feasibility_min: 6.0     // Minimum technical score
};
```

## 📊 Monitoring & Analytics

### Key Metrics to Track

1. **Processing Metrics:**
- Average processing time per strategy
- AI model response times
- Success/failure rates
- Resource utilization
1. **Business Metrics:**
- Strategies created per month
- Validation success rates
- Market opportunity scores distribution
- Recommendation accuracy
1. **Quality Metrics:**
- AI confidence score trends
- Customer outcome identification accuracy
- Market segment precision
- Competitive analysis completeness

### Logging Configuration

The workflow automatically logs to MongoDB `service_logs` collection:

```javascript
// View recent logs
db.service_logs.find()
  .sort({timestamp: -1})
  .limit(10);

// Monitor errors
db.service_logs.find({
  event_type: "error",
  timestamp: {$gte: new Date(Date.now() - 24*60*60*1000)}
});

// Performance monitoring
db.service_logs.aggregate([
  {$match: {event_type: "performance"}},
  {$group: {
    _id: null,
    avg_execution_time: {$avg: "$performance_metrics.execution_time_ms"},
    avg_ai_time: {$avg: "$performance_metrics.ai_processing_time_ms"}
  }}
]);
```

## 🔄 Event Integration

### Publishing Events

The service publishes these events for other microservices:

```javascript
// Event published when strategy is created
{
  "event_type": "innovation_strategy_created",
  "service": "innovation", 
  "document_id": "ObjectId",
  "document_ref": "mongodb://innovation_strategies/ObjectId",
  "status": "validated",
  "ai_insights": {
    "recommendation": "pursue",
    "confidence": 0.84,
    "market_size": 50000000
  },
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### Consuming Events

To trigger from external events, modify the workflow trigger:

```javascript
// Listen for market data updates
export default defineComponent({
  props: {
    // Add webhook or scheduled trigger
    trigger: {
      type: "$.interface.http",
      customResponse: true
    }
  }
});
```

## 🔒 Security Considerations

### Data Protection

- All customer data is encrypted in MongoDB
- API keys are stored in Pipedream secure environment variables
- Audit trail tracks all data access and modifications

### Rate Limiting

```javascript
// Add rate limiting in workflow
const rateLimiter = {
  requests_per_hour: 100,
  requests_per_day: 1000
};
```

### Access Control

- Implement API key validation for production
- Add role-based access for different strategy types
- Audit all create/update operations

## 🧪 Testing

### Unit Testing Data

```json
{
  "test_market_data": {
    "industry": "Test Industry",
    "trends": ["test_trend_1", "test_trend_2"]
  },
  "test_customer_data": {
    "pain_points": [
      {"pain": "Test pain point", "frequency": 0.5, "intensity": 5}
    ]
  }
}
```

### Expected Test Results

- Processing time: < 60 seconds
- Confidence score: > 0.5
- Market opportunity score: > 5.0
- At least 3 customer outcomes identified
- At least 2 market segments identified

## 🚨 Troubleshooting

### Common Issues

1. **MongoDB Connection Failed**
   
   ```bash
   # Check MongoDB is running
   mongo mongodb://your-host:27017/admin
   
   # Verify network connectivity from Pipedream
   ```
1. **OpenAI API Errors**
   
   ```javascript
   // Check API key and quota
   // Verify model availability
   // Adjust timeout settings
   ```
1. **High Processing Times**
   
   ```javascript
   // Reduce AI model temperature
   // Optimize input data size
   // Implement caching for repeated requests
   ```
1. **Low Confidence Scores**
   
   ```javascript
   // Improve input data quality
   // Add more validation data
   // Adjust AI prompts for better results
   ```

### Debug Mode

Enable debug logging:

```javascript
const DEBUG_MODE = true;

if (DEBUG_MODE) {
  console.log("Debug: Input data", JSON.stringify(inputs, null, 2));
  console.log("Debug: AI response", aiResponse);
}
```

## 📈 Performance Optimization

### Caching Strategy

```javascript
// Cache frequently accessed market data
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

// Cache AI responses for similar inputs
const responseCache = new Map();
```

### Batch Processing

```javascript
// Process multiple strategies in parallel
const batchSize = 5;
const strategies = await Promise.all(
  inputBatch.map(input => processStrategy(input))
);
```

### Resource Management

```javascript
// Optimize memory usage
const processLargeDataset = async (data) => {
  const chunks = chunkArray(data, 100);
  for (const chunk of chunks) {
    await processChunk(chunk);
    // Allow garbage collection
    await new Promise(resolve => setTimeout(resolve, 100));
  }
};
```

-----

## 🎯 Next Steps

1. **Deploy the MongoDB schema** to your Sliplane instance
1. **Create the Pipedream workflow** with the provided code
1. **Test with sample data** to verify functionality
1. **Set up monitoring** for production use
1. **Configure event routing** to other microservices
1. **Implement security measures** for production deployment

The Innovation Management Microservice is now ready to power your AI-enhanced, outcome-driven product development pipeline! 🚀
