SenseLogs
===

SenseLogs is a better log viewer for AWS cloud watch logs.

## Description

SenseLogs runs entirely in your browser. It transparently downloads log data and stores it locally in your browser application cache for immediate viewing and super fast queries. SenseLogs supports effortless scrolling through log data with powerful full text searching.

## Features

- Simple
- Live data
- Automatic aggregation of streams
- Infinite smooth scrolling through log events
- Search and filter events with full text queries
- View and query events by date range
- JSON Smart -- extracts fields from event data
- Save multiple views and bookmark links
- Supports multiple cloud accounts and regions
- Free (as in no charge)

### Installation

There is nothing to install. Just navigate your browser to:

    https://log.senselogs.com/

SenseLogs is a single page application that will render in your browser.

## Getting Started

To start using SenseLogs, you need to add an AWS cloud credential to enable access to your AWS Cloud Watch Logs. Then you can create one or more views of your logs. It takes only a minute to get started.

### Cloud Credentials

You can add one or more AWS cloud credentials to authorize access to your Cloud Watch Log Groups. Your credentials are stored locally, encrypted in your browser cache and accessible only to the SenseLogs application in your browser. The credentials are only provided to the AWS SDK running in your browser and are not transmitted or shared with any other party.

![SenseLogs Add View](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/cloud-add.png)

Your AWS cloud credentials can be any AWS IAM access key and secret access key. If you wish, you can restrict the access rights granted to SenseLogs by creating a dedicated IAM user and access key with the policy: https://log.senselogs.com/iam_policy.json.

When you enter your cloud credentials, you must also enter the AWS region containing your logs.

### Log Views

Once your credentials are added, SenseLogs will start discovering your Log groups in the background. Navigate to https://logs.sensedeep.com/views/add to create your first Log View. Once added, SenseLogs will transparently download your log event data in the background.

![SenseLogs Add View](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/view-add.png)

You can specify a single log stream for the view or all log streams by using * as the stream name. When selecting all streams, SenseLogs will fetch event data from all streams and automatically aggregate the log event data and order by timestamp.

### Log Viewer

From the home page, select the log view to display by clicking on the view card.

![SenseLogs Home](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/home.png)

From the viewer, you can scroll forwards and backwards over log data. SenseLogs will transparently download log data as required for display.

![SenseLogs Home](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/viewer.png)

The first and last log events are highlighted with a reverse grey background.

### Log Filtering

From the viewer, you can modify view options by clicking on the view name at the top of the page. This will display a drop-down expansion panel of view and filtering options.

Changes made in the viewer are by default not persisted to the view configuration and will only take effect while you remain in the viewer. If you click "Save" after making changes, they will be persisted and update the default view configuration.

#### Select Fields

Click the "Select Fields" button to select which event fields are displayed. Your selections will be persisted on a per-view basis.

If you select the "Include new fields" checkbox, whenever new fields are encountered in the log event stream, the new fields will be displayed by default.

#### Filter by Date

You can select a subset of log events to display via the event range slider. Drag the start and end markers to the desired times. If you click on the start or end mark labels, you can enter explicit dates and times.

![SenseLogs Add View](https://raw.githubusercontent.com/sensedeep/senselogs/master/images/date-range.png)

#### Filter by Text

Events can be filtered by specifying a matching text pattern. SenseDeep performs full-text matching against all fields of the log event record. Text matches are performed with case-less comparisons.

#### Log Format

If your log events are written as single line JSON records and you specify the format as JSON, SenseLogs will parse event log records and format JSON fields into table columns. This can make viewing JSON log data much more pleasant.

### Live Tail Mode

The View live tail option causes SenseLogs to poll for new event data and display new log events at the "tail" of the viewer display. The view polling period can be defined when you create or modify a view. As new events are added to the viewer, they will be highlighted with a temporary "flash" of those event rows.

### Enterprise Version

This version of SenseLogs is free of charge and we'll soon be releasing an enhanced commercial version. The commercial version will support synchronizing your log views across multiple devices and will offer enhanced log event searching and query operations. Please let us know if there are enhancements that you would like to see in SenseLogs by emailing us at dev@sensedeep.com.

### License

The community edition of SenseLogs (this version) is not open source, but you are free to use it without charge. Please read the [License](LICENSE.md) for details. We provide support and respond to issues via a GitHub site at:

    https://github.com/sensedeep/senselogs/issues
