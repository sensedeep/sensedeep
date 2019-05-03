SenseLogs How To
===

SenseLogs is a snappy log viewer for cloud developers who want an effortless way to find application errors and events.

## Features

- Transparent downloading of AWS CloudWatch Logs.
- Automatic aggregation of log streams.
- Live updating of events in the background.
- Infinite smooth scrolling through log events.
- Fast log scanning. SenseLogs navigates through your logs 5x faster than the AWS console.
- Search and filter events with full text queries.
- SenseLogs queries data 10x faster than CloudWatch Insights.
- Cache log data limited by size or date range.
- View and query events by date range with fast Goto event by date and time.
- Smart log parsing &mdash; extracts fields from JSON event data.
- Save and bookmark favorite log views.

## Getting Started

### Enter Your Cloud Credentials

To start using SenseLogs, you need to add an AWS cloud credential to enable read-only access to your AWS CloudWatch Logs.

Your credentials are stored locally, in your browser cache and accessible only to the SenseLogs application in your browser. The credentials are only provided to the AWS SDK running in your browser and are not transmitted or shared with any other party other than AWS.

![SenseLogs Add View Image](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/cloud-add.png)


```
{
  "Version": "2012-10-17",
  "Statement": [{
      "Sid": "ReadOnlyAccess",
      "Action": [
          "logs:DescribeLogGroups",
          "logs:DescribeLogStreams",
          "logs:GetLogEvents"
      ],
      "Resource": "*",
      "Effect": "Allow"
  }]
}
```

This policy grants read-only access to get AWS logs and streams and get logs events.

When you enter your cloud credentials, you must also enter the AWS region containing your logs.

### Define Log Views

Once your credentials are added, SenseLogs will start discovering your Log groups in the background. But it will only download events for those logs for which you define a log view.

To create a view, navigate to https://senselogs.sensedeep.com/views/add. Once the view is created, SenseLogs will transparently download your log event data for that view in the background.

![SenseLogs Add View Image](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/view-add.png)

You can specify a single log stream for the view or all log streams by using * as the stream name. When selecting all streams, SenseLogs will fetch event data from all streams and automatically aggregate the log event data and order by timestamp.

### Log Viewer

From the home page, select the log view to display by clicking on the view card.

![SenseLogs Home Page Image](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/home.png)

This will launch the viewer for that log view.

![SenseLogs Viewer Image](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/viewer.png)

From the viewer, you can scroll forwards and backwards over log data. SenseLogs will transparently download log data as required for display.

The first and last log events are highlighted with a reverse grey background.

You can also drag the horizontal slider to position the view at the desired date. The start and end date pill buttons can be used to jump to the start and end of the event stream.

![SenseLogs Viewer Image](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/viewer-position.png)

Event column widths can be resized by dragging the column separator in the title (only) to the desired width. Your changes will be persisted for each view.

### View Options

From the viewer, you can modify view options by clicking on the view name at the top of the page. This will display a drop-down expansion panel of view and filtering options.

![SenseLogs Filter by Date Image](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/viewer-filtering.png)

Changes made in the viewer are persisted to the view configuration.

#### Select Fields

Click the "Select Fields" button to select which event fields are displayed. When you add a field, it will be added to the right of existing fields. You can use this to re-order fields by removing and then re-adding in the desired order.

#### Filter by Date

You can select a subset of log events to display via the event range slider. Drag the start and end markers to the desired times. If you click on the start or end mark labels, you can enter explicit dates and times.

#### Filter by Text

Events can be filtered by specifying a matching text pattern. SenseDeep performs full-text matching against all fields of the log event record. Text matches are performed with case-less comparisons.

### Live Tail

SenseLogs will append new data and scroll to the bottom if the "Live Tail" option is selected. As new events are added to the viewer, they will be highlighted with a temporary "flash" of those event rows.

### Thanks

Thanks for trying SenseLogs. Please let us know if there are enhancements that you would like to see in SenseLogs by emailing us at [dev@sensedeep.com](mailto:dev@sensedeep.com).
