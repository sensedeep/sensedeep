SenseLogs
===

SenseLogs is a better log viewer for AWS cloud watch logs.

This version is an early test of the core functionality. It is not complete or bug free.

## Description

SenseLogs is an AWS Cloud Watch Logs viewer that runs fast, entirely in your browser. It transparently downloads log data and stores events in your browser application cache for immediate viewing, smooth scrolling and queries. SenseLogs supports infinite scrolling through log data with powerful full text searching.

SenseLogs aggregates logs from multiple AWS log streams into a single, uniform view for analysis.

![SenseLogs Viewer Image](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/viewer.png)

## Features

- Transparent downloading of AWS Cloud Watch Logs
- Automatic aggregation of log streams
- Live updating of events in the background
- Infinite smooth scrolling through log events
- Search and filter events with full text queries
- Cache log data limited by size or date range
- View and query events by date range
- Fast Go To event by date and time
- JSON Smart -- extracts fields from event data
- Save multiple log views
- Bookmark favorite views
- Free (as in no charge)

### License

SenseLogs is not open source, but you are free to use it without charge. Please read the [License](LICENSE.md) for details. We provide support and respond to issues via a GitHub site at:

[https://github.com/sensedeep/senselogs/issues](https://github.com/sensedeep/senselogs/issues)

The free version has some capacity limits. You can configure one AWS cloud account and four log views.  We'll soon be releasing an enhanced commercial version that supports multiple clouds, regions and synchronizes your log views via the cloud across multiple devices, and offers enhanced log event searching and query operations.

### Installation

There is nothing to install. Just navigate your browser to:

[https://senselogs.sensedeep.com/](https://senselogs.sensedeep.com/)

SenseLogs is a single page application that will render in your browser. SenseLogs supports the latest Chrome, Firefox and Safari desktop browsers.

### Whats New

To see what is new in the latest release of SenseLogs, you can read the release change log at:

https://github.com/sensedeep/senselogs/releases

### Support

While there is no "support", you can log issues or request new features at:

https://github.com/sensedeep/senselogs/issues

## Getting Started

### Cloud Credentials

To start using SenseLogs, you need to add an AWS cloud credential to enable read-only access to your AWS Cloud Watch Logs.

Your credentials are stored locally, in encrypted your browser cache and accessible only to the SenseLogs application in your browser. The credentials are only provided to the AWS SDK running in your browser and are not transmitted or shared with any other party.

![SenseLogs Add View Image](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/cloud-add.png)

Your AWS cloud credentials can be any AWS IAM access key and secret access key. If you wish, you can restrict the access rights granted to SenseLogs by creating a dedicated IAM user and access key with the policy:

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

### Log Views

Once your credentials are added, SenseLogs will start discovering your Log groups in the background. But it will only download events for those logs for which you define a log view.

To create a view, navigate to https://senselogs.sensedeep.com/views/add. Once added, SenseLogs will transparently download your log event data in the background.

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

Event column widths can be resized by dragging the column separator in the title (only) to the desired width. Your changes will be persisted.

### View Options

From the viewer, you can modify view options by clicking on the view name at the top of the page. This will display a drop-down expansion panel of view and filtering options.

Changes made in the viewer are persisted to the view configuration.

#### Select Fields

Click the "Select Fields" button to select which event fields are displayed. When you add a field, it will be added to the right of existing fields. You can use this to re-order fields by removing and then re-adding in the desired order.

#### Filter by Date

You can select a subset of log events to display via the event range slider. Drag the start and end markers to the desired times. If you click on the start or end mark labels, you can enter explicit dates and times.

![SenseLogs Filter by Date Image](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/viewer-filtering.png)

#### Filter by Text

Events can be filtered by specifying a matching text pattern. SenseDeep performs full-text matching against all fields of the log event record. Text matches are performed with case-less comparisons.

#### Log Format

If your log events are written as single line JSON records and you specify the format as JSON, SenseLogs will parse event log records and format JSON fields into table columns. This can make viewing JSON log data much more pleasant.

### Live Tail Mode

SenseLogs will append new data and scroll to the bottom if the "Live Tail" option is selected. As new events are added to the viewer, they will be highlighted with a temporary "flash" of those event rows.

### Thanks

Thanks for trying SenseLogs. Please let us know if there are enhancements that you would like to see in SenseLogs by emailing us at dev@sensedeep.com.
