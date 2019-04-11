SenseLogs
===

SenseLogs is a better log viewer for AWS cloud watch logs.

This version is an early test of the core functionality. It is not complete or bug free.

## Description

SenseLogs is a log viewer that runs blazingly fast, entirely in your browser. It transparently downloads log data and stores it locally in your browser application cache for immediate viewing, smooth scrolling and super fast queries. SenseLogs supports effortless scrolling through log data with powerful full text searching.

SenseLogs aggregates logs from multiple AWS log streams into a single, uniform view for easy analysis.

![SenseLogs Viewer Image](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/viewer.png)

## Features

- Transparent downloading of AWS Cloud Watch Logs
- Automatic aggregation of log streams
- Live updating of events in the background
- Infinite smooth scrolling through log events
- Search and filter events with full text queries
- View and query events by date range
- JSON Smart -- extracts fields from event data
- Save multiple views and bookmark links
- Free (as in no charge)

### License

SenseLogs is not open source, but you are free to use it without charge. Please read the [License](LICENSE.md) for details. We provide support and respond to issues via a GitHub site at:

    https://github.com/sensedeep/senselogs/issues

This free version has some capacity limits. You can configure one AWS cloud account and four log views.  We'll soon be releasing an enhanced commercial version that supports multiple clouds, regions and synchronizes your log views via the cloud across multiple devices. It also offers enhanced log event searching and query operations. 

### Installation

There is nothing to install. Just navigate your browser to:

    https://log.senselogs.com/

SenseLogs is a single page application that will render in your browser. SenseLogs supports the Chrome, Firefox and Safari desktop browsers.

## Getting Started

To start using SenseLogs, you need to add an AWS cloud credential to enable access to your AWS Cloud Watch Logs. Then you can create one or more views of your logs. It takes only a minute to get started.

### Cloud Credentials

You can add one or more AWS cloud credentials to authorize access to your Cloud Watch Log Groups. Your credentials are stored locally, in your browser cache and accessible only to the SenseLogs application in your browser. The credentials are only provided to the AWS SDK running in your browser and are not transmitted or shared with any other party.

![SenseLogs Add View Image](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/cloud-add.png)

Your AWS cloud credentials can be any AWS IAM access key and secret access key. If you wish, you can restrict the access rights granted to SenseLogs by creating a dedicated IAM user and access key with the policy: https://log.senselogs.com/iam_policy.json.

When you enter your cloud credentials, you must also enter the AWS region containing your logs.

### Log Views

Once your credentials are added, SenseLogs will start discovering your Log groups in the background. But it will only download events for those logs for which you define a log view.

To create a view, navigate to https://logs.sensedeep.com/views/add. Once added, SenseLogs will transparently download your log event data in the background.

![SenseLogs Add View Image](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/view-add.png)

You can specify a single log stream for the view or all log streams by using * as the stream name. When selecting all streams, SenseLogs will fetch event data from all streams and automatically aggregate the log event data and order by timestamp.

### Log Viewer

From the home page, select the log view to display by clicking on the view card.

![SenseLogs Home Page Image](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/home.png)

From the viewer, you can scroll forwards and backwards over log data. SenseLogs will transparently download log data as required for display.

![SenseLogs Viewer Image](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/viewer.png)

The first and last log events are highlighted with a reverse grey background.

### Log Filtering

From the viewer, you can modify view options by clicking on the view name at the top of the page. This will display a drop-down expansion panel of view and filtering options.

Changes made in the viewer are by default not persisted to the view configuration and will only take effect while you remain in the viewer. If you click "Save" after making changes, they will be persisted and update the default view configuration.

#### Select Fields

Click the "Select Fields" button to select which event fields are displayed. Your selections will be persisted on a per-view basis.

If you select the "Include new fields" checkbox, whenever new fields are encountered in the log event stream, the new fields will be displayed by default.

#### Filter by Date

You can select a subset of log events to display via the event range slider. Drag the start and end markers to the desired times. If you click on the start or end mark labels, you can enter explicit dates and times.

![SenseLogs Filter by Date Image](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/viewer-filtering.png)

#### Filter by Text

Events can be filtered by specifying a matching text pattern. SenseDeep performs full-text matching against all fields of the log event record. Text matches are performed with case-less comparisons.

#### Log Format

If your log events are written as single line JSON records and you specify the format as JSON, SenseLogs will parse event log records and format JSON fields into table columns. This can make viewing JSON log data much more pleasant.

### Live Tail Mode

The View live tail option causes SenseLogs to poll for new event data and display new log events at the "tail" of the viewer display. The view polling period can be defined when you create or modify a view. As new events are added to the viewer, they will be highlighted with a temporary "flash" of those event rows.

### Thanks

Thanks for trying SenseLogs. Please let us know if there are enhancements that you would like to see in SenseLogs by emailing us at dev@sensedeep.com.
