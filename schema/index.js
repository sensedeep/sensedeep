/*
    SenseDeep Schema
 */

const EnumUuid = /^[0-9A-F]{32}$/i

export default {
    indexes: {
        primary: {
            hash: 'pk',
            sort: 'sk',
            description: 'Primary index'
        }
    },
    models: {
        Alarm: {
            pk:             { type: String, value: 'alarm:' },
            sk:             { type: String, value: 'alarm:${id}' },

            enable:         { type: Boolean },
            family:         { type: String, enum: ['metrics', 'events', 'logs', 'recommendations', 'relay'], required: true },
            forward:        { type: Object },
            id:             { type: String, validate: EnumUuid },
            interval:       { type: String },
            name:           { type: String, required: true },
            metric:         { type: String },
            notifications:  { type: Array },
            operator:       { type: String },                       //  Metric operator
            pattern:        { type: Array },                        //  Log matching pattern
            recommendations:{ type: Array },
            resources:      { type: Object },                       //  Resources to consider
            severity:       { type: String, enum: ['critical', 'error', 'warning', 'info']},
            statistic:      { type: String },                       //  Metric statistic
            threshold:      { type: Number },                       //  Metric threshold value
            tags:           { type: Object },
        },

        Alert: {
            pk:             { type: String, value: 'alert:' },
            sk:             { type: String, value: 'alert:${id}:${seq}' },

            alarmId:        { type: String },                       //  Alarm.id
            assigned:       { type: String },                       //  User assigned
            count:          { type: Number },                       //  Count of triggers
            family:         { type: String, enum: ['metrics', 'events', 'logs', 'recommendations'] },
            id:             { type: String },                       //  alarm:resource
            interval:       { type: String },                       //  Alarm.interval
            name:           { type: String, required: true },       //  Alarm.name
            message:        { type: String },                       //  Text message regarding alert
            operator:       { type: String },                       //  Alarm.operator (metric operator)
            pattern:        { type: String },                       //  Alarm.pattern (log pattern)
            region:         { type: String },                       //  Region of triggering alert (here for notifications)
            requestId:      { type: String },                       //  Lambda requestId
            resolved:       { type: Boolean },                      //  Alert resolved by user
            resource:       { type: String },                       //  Resource triggering the alert
            severity:       { type: String, enum: ['critical', 'error', 'warning', 'info']},        //  Alarm.severity
            seq:            { type: String, validate: EnumUuid },   //  Alert unique sequence
            start:          { type: Date },                         //  Start of lambda invocation
            statistic:      { type: String },                       //  Alarm.statistic
            timestamp:      { type: Date },                         //  Time of log event
            threshold:      { type: Number },                       //  Alarm.threshold
            value:          { type: Number },                       //  event.message
        },

        Bus: {
            pk:             { type: String, value: 'bus:' },
            sk:             { type: String, value: 'bus:${name}' },
            arn:            { type: String },
            name:           { type: String },
            subscribed:     { type: Date },
        },

        Control: {
            pk:             { type: String, value: 'control:' },
            sk:             { type: String, value: 'control:1' },
            enable:         { type: Boolean },
            resources:      { type: Object },
            update:         { type: Date },                                     //  Signal update watchers
            reload:         { type: Date },                                     //  Signal scheduler to reload
            subscribed:     { type: Date },                                     //  When last subscribed (first pass)
        },

        Log: {
            pk:             { type: String, value: 'log:' },
            sk:             { type: String, value: 'log:${id}' },

            backfill:       { type: Object },
            created:        { type: Date },
            delimiter:      { type: String },
            enable:         { type: Boolean },                                 // Not currently used
            fields:         { type: Array },
            format:         { type: String },
            id:             { type: String, validate: EnumUuid },
            lambda:         { type: Object },
            lifespan:       { type: Number },
            name:           { type: String, required: true },
            pattern:        { type: String },
            region:         { type: Number },
            retention:      { type: Number },
            size:           { type: Number },                                   //  CLW stored bytes
            subscribed:     { type: Date },
            tags:           { type: Object },
            viewIndex:      { type: Number },
            views:          { type: Array },
        },

        Event: {
            pk:             { type: String },           // log.name
            sk:             { type: String },           // IsoDate + Event.id
            expire:         { type: Number },
            message:        { type: String },
        }
    }
}
