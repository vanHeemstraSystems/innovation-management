// MongoDB Schema for Innovation Management Microservice
// File: mongodb-innovation-schema.js

// =============================================================================
// MAIN COLLECTION: innovation_strategies
// =============================================================================

// Collection Schema Validation
db.createCollection('innovation_strategies', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['status', 'created_at', 'updated_at', 'version'],
      properties: {
        _id: { bsonType: 'objectId' },

        // Status Management
        status: {
          bsonType: 'string',
          enum: ['draft', 'validated', 'approved', 'archived', 'rejected'],
          description: 'Current status of the innovation strategy'
        },

        // Core ODI Elements
        customer_outcomes: {
          bsonType: 'array',
          items: {
            bsonType: 'object',
            required: [
              'outcome',
              'importance_score',
              'satisfaction_score',
              'opportunity_score'
            ],
            properties: {
              outcome: {
                bsonType: 'string',
                description: 'Customer job-to-be-done or outcome statement'
              },
              importance_score: {
                bsonType: 'double',
                minimum: 1,
                maximum: 10,
                description: 'How important this outcome is to customers (1-10)'
              },
              satisfaction_score: {
                bsonType: 'double',
                minimum: 1,
                maximum: 10,
                description: 'How satisfied customers are currently (1-10)'
              },
              opportunity_score: {
                bsonType: 'double',
                minimum: 0,
                maximum: 100,
                description:
                  'Calculated opportunity score (importance × (importance - satisfaction))'
              },
              segment_data: {
                bsonType: 'object',
                properties: {
                  primary_segment: { bsonType: 'string' },
                  segment_size: { bsonType: 'int' },
                  willingness_to_pay: { bsonType: 'double' }
                }
              },
              validation_data: {
                bsonType: 'object',
                properties: {
                  sample_size: { bsonType: 'int' },
                  confidence_level: { bsonType: 'double' },
                  data_source: { bsonType: 'string' },
                  collection_date: { bsonType: 'date' }
                }
              }
            }
          }
        },

        market_segments: {
          bsonType: 'array',
          items: {
            bsonType: 'object',
            required: ['segment_name', 'size', 'opportunity_score'],
            properties: {
              segment_name: { bsonType: 'string' },
              description: { bsonType: 'string' },
              size: { bsonType: 'int', minimum: 0 },
              growth_rate: { bsonType: 'double' },
              opportunity_score: {
                bsonType: 'double',
                minimum: 0,
                maximum: 100
              },
              willingness_to_pay: { bsonType: 'double', minimum: 0 },
              competitive_intensity: {
                bsonType: 'string',
                enum: ['low', 'medium', 'high']
              },
              accessibility: {
                bsonType: 'string',
                enum: ['easy', 'moderate', 'difficult']
              },
              personas: {
                bsonType: 'array',
                items: {
                  bsonType: 'object',
                  properties: {
                    name: { bsonType: 'string' },
                    demographics: { bsonType: 'object' },
                    pain_points: {
                      bsonType: 'array',
                      items: { bsonType: 'string' }
                    },
                    goals: { bsonType: 'array', items: { bsonType: 'string' } }
                  }
                }
              }
            }
          }
        },

        value_propositions: {
          bsonType: 'array',
          items: {
            bsonType: 'object',
            required: ['proposition', 'target_segment', 'differentiation'],
            properties: {
              proposition: { bsonType: 'string' },
              target_segment: { bsonType: 'string' },
              differentiation: { bsonType: 'string' },
              supporting_features: {
                bsonType: 'array',
                items: { bsonType: 'string' }
              },
              competitive_advantage: { bsonType: 'string' },
              value_metrics: {
                bsonType: 'object',
                properties: {
                  cost_savings: { bsonType: 'double' },
                  time_savings: { bsonType: 'double' },
                  efficiency_gain: { bsonType: 'double' },
                  revenue_potential: { bsonType: 'double' }
                }
              }
            }
          }
        },

        // Market Analysis
        market_analysis: {
          bsonType: 'object',
          properties: {
            total_addressable_market: { bsonType: 'long' },
            serviceable_addressable_market: { bsonType: 'long' },
            serviceable_obtainable_market: { bsonType: 'long' },
            market_growth_rate: { bsonType: 'double' },
            market_maturity: {
              bsonType: 'string',
              enum: ['emerging', 'growth', 'mature', 'declining']
            },
            key_trends: { bsonType: 'array', items: { bsonType: 'string' } },
            market_drivers: {
              bsonType: 'array',
              items: { bsonType: 'string' }
            },
            barriers_to_entry: {
              bsonType: 'array',
              items: { bsonType: 'string' }
            }
          }
        },

        competitive_analysis: {
          bsonType: 'object',
          properties: {
            direct_competitors: {
              bsonType: 'array',
              items: {
                bsonType: 'object',
                properties: {
                  name: { bsonType: 'string' },
                  market_share: { bsonType: 'double' },
                  strengths: {
                    bsonType: 'array',
                    items: { bsonType: 'string' }
                  },
                  weaknesses: {
                    bsonType: 'array',
                    items: { bsonType: 'string' }
                  },
                  pricing_strategy: { bsonType: 'string' },
                  target_segments: {
                    bsonType: 'array',
                    items: { bsonType: 'string' }
                  }
                }
              }
            },
            indirect_competitors: { bsonType: 'array' },
            competitive_gaps: {
              bsonType: 'array',
              items: { bsonType: 'string' }
            },
            competitive_advantages: {
              bsonType: 'array',
              items: { bsonType: 'string' }
            }
          }
        },

        // Validation Data
        validation_data: {
          bsonType: 'object',
          properties: {
            discovery_phase: {
              bsonType: 'object',
              properties: {
                methodology: { bsonType: 'string' },
                sample_size: { bsonType: 'int' },
                data_quality_score: { bsonType: 'double' },
                key_findings: {
                  bsonType: 'array',
                  items: { bsonType: 'string' }
                },
                confidence_level: { bsonType: 'double' }
              }
            },
            validation_phase: {
              bsonType: 'object',
              properties: {
                validation_method: { bsonType: 'string' },
                success_criteria: { bsonType: 'array' },
                results: { bsonType: 'object' },
                lessons_learned: {
                  bsonType: 'array',
                  items: { bsonType: 'string' }
                }
              }
            },
            pre_sell_phase: {
              bsonType: 'object',
              properties: {
                test_designs: { bsonType: 'array' },
                conversion_rates: { bsonType: 'object' },
                pricing_sensitivity: { bsonType: 'object' },
                feature_priorities: { bsonType: 'array' }
              }
            },
            validation_scores: {
              bsonType: 'object',
              properties: {
                market_opportunity_strength: {
                  bsonType: 'double',
                  minimum: 0,
                  maximum: 10
                },
                customer_validation_confidence: {
                  bsonType: 'double',
                  minimum: 0,
                  maximum: 10
                },
                competitive_advantage_potential: {
                  bsonType: 'double',
                  minimum: 0,
                  maximum: 10
                },
                technical_feasibility: {
                  bsonType: 'double',
                  minimum: 0,
                  maximum: 10
                },
                business_model_viability: {
                  bsonType: 'double',
                  minimum: 0,
                  maximum: 10
                },
                strategic_alignment: {
                  bsonType: 'double',
                  minimum: 0,
                  maximum: 10
                },
                risk_assessment: {
                  bsonType: 'double',
                  minimum: 0,
                  maximum: 10
                },
                overall_confidence: {
                  bsonType: 'double',
                  minimum: 0,
                  maximum: 1
                }
              }
            }
          }
        },

        // AI Insights
        ai_insights: {
          bsonType: 'object',
          properties: {
            model_version: { bsonType: 'string' },
            processing_timestamp: { bsonType: 'date' },
            confidence_score: { bsonType: 'double', minimum: 0, maximum: 1 },
            market_opportunity_score: {
              bsonType: 'double',
              minimum: 0,
              maximum: 10
            },
            recommendation: {
              bsonType: 'string',
              enum: ['pursue', 'modify', 'abandon', 'investigate_further']
            },
            key_success_factors: {
              bsonType: 'array',
              items: { bsonType: 'string' }
            },
            primary_risks: { bsonType: 'array', items: { bsonType: 'string' } },
            market_trends_analysis: { bsonType: 'array' },
            competitive_gaps_identified: { bsonType: 'array' },
            innovation_opportunities: { bsonType: 'array' },
            ai_generated_insights: {
              bsonType: 'array',
              items: { bsonType: 'string' }
            }
          }
        },

        // Success Metrics
        success_metrics: {
          bsonType: 'array',
          items: {
            bsonType: 'object',
            required: ['metric_name', 'target_value', 'measurement_method'],
            properties: {
              metric_name: { bsonType: 'string' },
              description: { bsonType: 'string' },
              target_value: { bsonType: 'double' },
              current_baseline: { bsonType: 'double' },
              measurement_method: { bsonType: 'string' },
              tracking_frequency: {
                bsonType: 'string',
                enum: ['daily', 'weekly', 'monthly', 'quarterly']
              },
              owner: { bsonType: 'string' },
              category: {
                bsonType: 'string',
                enum: ['customer', 'business', 'operational', 'innovation']
              }
            }
          }
        },

        // Implementation
        implementation_roadmap: {
          bsonType: 'object',
          properties: {
            phases: {
              bsonType: 'array',
              items: {
                bsonType: 'object',
                properties: {
                  phase_name: { bsonType: 'string' },
                  duration_months: { bsonType: 'int' },
                  objectives: {
                    bsonType: 'array',
                    items: { bsonType: 'string' }
                  },
                  deliverables: {
                    bsonType: 'array',
                    items: { bsonType: 'string' }
                  },
                  success_criteria: {
                    bsonType: 'array',
                    items: { bsonType: 'string' }
                  },
                  dependencies: {
                    bsonType: 'array',
                    items: { bsonType: 'string' }
                  }
                }
              }
            },
            critical_path: { bsonType: 'array', items: { bsonType: 'string' } },
            risk_mitigation_plans: { bsonType: 'array' }
          }
        },

        resource_requirements: {
          bsonType: 'object',
          properties: {
            budget_estimate: { bsonType: 'long' },
            team_requirements: {
              bsonType: 'object',
              properties: {
                team_size: { bsonType: 'int' },
                skill_requirements: {
                  bsonType: 'array',
                  items: { bsonType: 'string' }
                },
                external_expertise: {
                  bsonType: 'array',
                  items: { bsonType: 'string' }
                }
              }
            },
            technology_stack: {
              bsonType: 'object',
              properties: {
                required_platforms: {
                  bsonType: 'array',
                  items: { bsonType: 'string' }
                },
                development_tools: {
                  bsonType: 'array',
                  items: { bsonType: 'string' }
                },
                infrastructure_needs: {
                  bsonType: 'array',
                  items: { bsonType: 'string' }
                },
                third_party_integrations: {
                  bsonType: 'array',
                  items: { bsonType: 'string' }
                }
              }
            },
            timeline_estimate: {
              bsonType: 'object',
              properties: {
                discovery_to_launch_months: { bsonType: 'int' },
                mvp_timeline_months: { bsonType: 'int' },
                full_product_timeline_months: { bsonType: 'int' }
              }
            }
          }
        },

        // Metadata
        created_at: { bsonType: 'date' },
        updated_at: { bsonType: 'date' },
        version: {
          bsonType: 'string',
          pattern: '^[0-9]+\\.[0-9]+$',
          description: 'Version in format X.Y'
        },

        // Processing Metadata
        processing_metadata: {
          bsonType: 'object',
          properties: {
            ai_model_used: { bsonType: 'string' },
            processing_duration_ms: { bsonType: 'long' },
            data_sources: { bsonType: 'array', items: { bsonType: 'string' } },
            confidence_level: { bsonType: 'double', minimum: 0, maximum: 1 },
            processing_node: { bsonType: 'string' },
            input_data_hash: { bsonType: 'string' }
          }
        },

        // Audit Trail
        audit_trail: {
          bsonType: 'array',
          items: {
            bsonType: 'object',
            required: ['action', 'timestamp', 'user'],
            properties: {
              action: {
                bsonType: 'string',
                enum: [
                  'created',
                  'updated',
                  'validated',
                  'approved',
                  'rejected',
                  'archived'
                ]
              },
              timestamp: { bsonType: 'date' },
              user: { bsonType: 'string' },
              changes: { bsonType: 'object' },
              reason: { bsonType: 'string' },
              approval_level: { bsonType: 'string' }
            }
          }
        }
      }
    }
  }
})

// =============================================================================
// SUPPORTING COLLECTIONS
// =============================================================================

// Service Events Collection
db.createCollection('service_events', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['event_type', 'service', 'timestamp'],
      properties: {
        _id: { bsonType: 'objectId' },
        event_type: {
          bsonType: 'string',
          enum: [
            'innovation_strategy_created',
            'innovation_strategy_updated',
            'innovation_strategy_validated',
            'innovation_strategy_approved',
            'innovation_strategy_rejected'
          ]
        },
        service: { bsonType: 'string', enum: ['innovation'] },
        document_id: { bsonType: 'objectId' },
        document_ref: { bsonType: 'string' },
        status: { bsonType: 'string' },
        metadata: { bsonType: 'object' },
        ai_insights: { bsonType: 'object' },
        timestamp: { bsonType: 'date' },
        processed: { bsonType: 'bool', default: false },
        retry_count: { bsonType: 'int', default: 0 }
      }
    }
  }
})

// Service Logs Collection
db.createCollection('service_logs', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['service', 'event_type', 'timestamp'],
      properties: {
        _id: { bsonType: 'objectId' },
        service: { bsonType: 'string', enum: ['innovation_management'] },
        event_type: {
          bsonType: 'string',
          enum: ['info', 'warning', 'error', 'debug', 'performance']
        },
        message: { bsonType: 'string' },
        error_message: { bsonType: 'string' },
        error_stack: { bsonType: 'string' },
        input_data: { bsonType: 'object' },
        performance_metrics: {
          bsonType: 'object',
          properties: {
            execution_time_ms: { bsonType: 'long' },
            ai_processing_time_ms: { bsonType: 'long' },
            mongodb_operations_count: { bsonType: 'int' },
            memory_usage_mb: { bsonType: 'double' }
          }
        },
        timestamp: { bsonType: 'date' },
        severity: {
          bsonType: 'string',
          enum: ['low', 'medium', 'high', 'critical']
        },
        correlation_id: { bsonType: 'string' }
      }
    }
  }
})

// Market Intelligence Collection (for caching external data)
db.createCollection('market_intelligence', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['data_type', 'source', 'collected_at'],
      properties: {
        _id: { bsonType: 'objectId' },
        data_type: {
          bsonType: 'string',
          enum: [
            'industry_report',
            'competitor_analysis',
            'market_trend',
            'customer_feedback',
            'patent_data'
          ]
        },
        source: { bsonType: 'string' },
        data: { bsonType: 'object' },
        collected_at: { bsonType: 'date' },
        expires_at: { bsonType: 'date' },
        reliability_score: { bsonType: 'double', minimum: 0, maximum: 1 },
        tags: { bsonType: 'array', items: { bsonType: 'string' } }
      }
    }
  }
})

// =============================================================================
// INDEXES FOR PERFORMANCE OPTIMIZATION
// =============================================================================

// Primary Collection Indexes
// Status and creation time for dashboard queries
db.innovation_strategies.createIndex(
  { status: 1, created_at: -1 },
  { name: 'status_creation_idx' }
)

// Customer outcome opportunity scores (for prioritization)
db.innovation_strategies.createIndex(
  { 'customer_outcomes.opportunity_score': -1 },
  { name: 'outcome_opportunity_idx', sparse: true }
)

// Market segments by opportunity score
db.innovation_strategies.createIndex(
  { 'market_segments.opportunity_score': -1 },
  { name: 'segment_opportunity_idx', sparse: true }
)

// AI recommendation and confidence scores
db.innovation_strategies.createIndex(
  {
    'ai_insights.recommendation': 1,
    'ai_insights.confidence_score': -1
  },
  { name: 'ai_recommendation_idx', sparse: true }
)

// Validation scores for filtering
db.innovation_strategies.createIndex(
  { 'validation_data.validation_scores.overall_confidence': -1 },
  { name: 'validation_confidence_idx', sparse: true }
)

// Version and update tracking
db.innovation_strategies.createIndex(
  { version: 1, updated_at: -1 },
  { name: 'version_tracking_idx' }
)

// Text search on outcomes and segments
db.innovation_strategies.createIndex(
  {
    'customer_outcomes.outcome': 'text',
    'market_segments.segment_name': 'text',
    'value_propositions.proposition': 'text'
  },
  {
    name: 'content_search_idx',
    weights: {
      'customer_outcomes.outcome': 10,
      'market_segments.segment_name': 5,
      'value_propositions.proposition': 3
    }
  }
)

// Service Events Indexes
// Event processing queue
db.service_events.createIndex(
  { processed: 1, timestamp: 1 },
  { name: 'event_processing_idx' }
)

// Event type and service filtering
db.service_events.createIndex(
  { service: 1, event_type: 1, timestamp: -1 },
  { name: 'service_event_type_idx' }
)

// Document reference lookup
db.service_events.createIndex(
  { document_id: 1, timestamp: -1 },
  { name: 'document_events_idx' }
)

// Service Logs Indexes
// Log level and service filtering
db.service_logs.createIndex(
  { service: 1, event_type: 1, timestamp: -1 },
  { name: 'service_log_type_idx' }
)

// Error tracking
db.service_logs.createIndex(
  { event_type: 1, severity: 1, timestamp: -1 },
  { name: 'error_tracking_idx' }
)

// Performance monitoring
db.service_logs.createIndex(
  { 'performance_metrics.execution_time_ms': -1, timestamp: -1 },
  { name: 'performance_monitoring_idx', sparse: true }
)

// Market Intelligence Indexes
// Data type and freshness
db.market_intelligence.createIndex(
  { data_type: 1, collected_at: -1 },
  { name: 'intelligence_type_idx' }
)

// Expiration for TTL
db.market_intelligence.createIndex(
  { expires_at: 1 },
  { name: 'intelligence_expiry_idx', expireAfterSeconds: 0 }
)

// Source reliability
db.market_intelligence.createIndex(
  { source: 1, reliability_score: -1 },
  { name: 'source_reliability_idx' }
)

// Tag-based searching
db.market_intelligence.createIndex(
  { tags: 1, collected_at: -1 },
  { name: 'intelligence_tags_idx' }
)

// =============================================================================
// AGGREGATION PIPELINES FOR COMMON QUERIES
// =============================================================================

// Function: Get Top Opportunities by Segment
function getTopOpportunitiesBySegment () {
  return db.innovation_strategies.aggregate([
    { $match: { status: { $in: ['validated', 'approved'] } } },
    { $unwind: '$customer_outcomes' },
    { $unwind: '$market_segments' },
    {
      $group: {
        _id: '$market_segments.segment_name',
        avg_opportunity_score: { $avg: '$customer_outcomes.opportunity_score' },
        total_market_size: { $sum: '$market_segments.size' },
        strategy_count: { $sum: 1 },
        top_outcomes: {
          $push: {
            outcome: '$customer_outcomes.outcome',
            score: '$customer_outcomes.opportunity_score'
          }
        }
      }
    },
    { $sort: { avg_opportunity_score: -1 } },
    {
      $project: {
        segment: '$_id',
        avg_opportunity_score: 1,
        total_market_size: 1,
        strategy_count: 1,
        top_outcomes: { $slice: ['$top_outcomes', 3] }
      }
    }
  ])
}

// Function: AI Performance Analytics
function getAIPerformanceMetrics () {
  return db.innovation_strategies.aggregate([
    { $match: { 'ai_insights.confidence_score': { $exists: true } } },
    {
      $group: {
        _id: '$ai_insights.model_version',
        avg_confidence: { $avg: '$ai_insights.confidence_score' },
        avg_market_score: { $avg: '$ai_insights.market_opportunity_score' },
        recommendation_distribution: {
          $push: '$ai_insights.recommendation'
        },
        total_strategies: { $sum: 1 }
      }
    },
    {
      $project: {
        model_version: '$_id',
        avg_confidence: { $round: ['$avg_confidence', 3] },
        avg_market_score: { $round: ['$avg_market_score', 2] },
        total_strategies: 1,
        recommendations: {
          pursue: {
            $size: {
              $filter: {
                input: '$recommendation_distribution',
                cond: { $eq: ['$$this', 'pursue'] }
              }
            }
          },
          modify: {
            $size: {
              $filter: {
                input: '$recommendation_distribution',
                cond: { $eq: ['$$this', 'modify'] }
              }
            }
          },
          abandon: {
            $size: {
              $filter: {
                input: '$recommendation_distribution',
                cond: { $eq: ['$$this', 'abandon'] }
              }
            }
          }
        }
      }
    }
  ])
}

// Function: Market Trend Analysis
function getMarketTrendAnalysis () {
  return db.innovation_strategies.aggregate([
    { $match: { 'market_analysis.key_trends': { $exists: true, $ne: [] } } },
    { $unwind: '$market_analysis.key_trends' },
    {
      $group: {
        _id: '$market_analysis.key_trends',
        frequency: { $sum: 1 },
        avg_market_size: { $avg: '$market_analysis.total_addressable_market' },
        success_rate: {
          $avg: {
            $cond: [{ $eq: ['$ai_insights.recommendation', 'pursue'] }, 1, 0]
          }
        }
      }
    },
    { $sort: { frequency: -1 } },
    { $limit: 20 }
  ])
}

// =============================================================================
// DATA VALIDATION FUNCTIONS
// =============================================================================

function validateInnovationStrategy (doc) {
  const errors = []

  // Validate opportunity scores calculation
  if (doc.customer_outcomes) {
    doc.customer_outcomes.forEach((outcome, index) => {
      const calculated =
        outcome.importance_score *
        (outcome.importance_score - outcome.satisfaction_score)
      if (Math.abs(calculated - outcome.opportunity_score) > 0.1) {
        errors.push(`Opportunity score mismatch in outcome ${index}`)
      }
    })
  }

  // Validate market size consistency
  if (doc.market_analysis) {
    const {
      total_addressable_market,
      serviceable_addressable_market,
      serviceable_obtainable_market
    } = doc.market_analysis
    if (serviceable_addressable_market > total_addressable_market) {
      errors.push('SAM cannot exceed TAM')
    }
    if (serviceable_obtainable_market > serviceable_addressable_market) {
      errors.push('SOM cannot exceed SAM')
    }
  }

  // Validate AI confidence scores
  if (doc.ai_insights && doc.ai_insights.confidence_score > 1) {
    errors.push('AI confidence score must be between 0 and 1')
  }

  return errors
}

// =============================================================================
// BACKUP AND MAINTENANCE PROCEDURES
// =============================================================================

// Weekly aggregation for reporting
db.runCommand({
  create: 'weekly_innovation_summary',
  viewOn: 'innovation_strategies',
  pipeline: [
    {
      $match: {
        created_at: {
          $gte: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
        }
      }
    },
    {
      $group: {
        _id: null,
        total_strategies: { $sum: 1 },
        avg_confidence: { $avg: '$ai_insights.confidence_score' },
        status_distribution: { $push: '$status' },
        top_segments: { $push: '$market_segments.segment_name' }
      }
    }
  ]
})

// Archive old strategies (older than 2 years)
function archiveOldStrategies () {
  const twoYearsAgo = new Date()
  twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2)

  return db.innovation_strategies.updateMany(
    {
      created_at: { $lt: twoYearsAgo },
      status: { $nin: ['approved', 'active'] }
    },
    {
      $set: {
        status: 'archived',
        archived_at: new Date()
      }
    }
  )
}

console.log(
  '✅ MongoDB Schema for Innovation Management Microservice created successfully!'
)
console.log(
  '📋 Collections created: innovation_strategies, service_events, service_logs, market_intelligence'
)
console.log(
  '🔍 Indexes optimized for: status queries, opportunity scoring, AI insights, text search'
)
console.log(
  '📊 Aggregation pipelines available for: opportunity analysis, AI performance, market trends'
)
console.log('✨ Ready for Pipedream workflow integration!')
