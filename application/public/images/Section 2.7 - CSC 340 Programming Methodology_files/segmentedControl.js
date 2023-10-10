define("segmentedControl", ["exports"], function(exports) {
var module = {};
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
  An object that builds and displays a segmented control.
*/

function SegmentedControl() {
    /*
        Initialize this segmented control.
         * |segments| - A list of segment titles.
        * |containerId| -  The id of the container that this segmented control should insert itself in.
        * |segmentSelectedCallback| - A callback function that is called when a segment is selected, and passes two arguments:
            * The index of the selected segment.
            * The title of the selected segment.
            * Whether the callback was called because of user interaction.
    */
    this.init = function (segments, containerId, segmentSelectedCallback) {
        var _this = this;

        this.name = 'segmentedControl';
        this.containerId = containerId;
        this.segmentSelectedCallback = segmentSelectedCallback;

        // Initialize an internal list of segments and their indices.
        this._segments = segments.map(function (segment, index) {
            return _this._makeSegment(segment, index, index === 0);
        });

        this.render();
    };

    /**
        Makes and returns a new segment.
        @method _makeSegment
        @param {String} title The new segment's title.
        @param {Integer} index The new segment's index.
        @param {Boolean} selected Whether the new segment is selected.
        @return {Object} The new segment
    */
    this._makeSegment = function (title, index) {
        var selected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        return { title: title, index: index, selected: selected };
    };

    /**
        Renders the segmented control.
        @method render
        @return {void}
    */
    this.render = function () {
        var css = '<style>.zyante-bold{font-family:HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;font-weight:300}.zyante-section-bold{font-family:Helvetica;font-weight:300}.section-content-container ul.segmented-control,.custom-tool ul.segmented-control{background-color:#fff;display:table;height:26px;list-style-type:none;margin:0 auto;margin-bottom:20px;padding:1px}.section-content-container ul.segmented-control li.segment-item,.custom-tool ul.segmented-control li.segment-item{border:1px solid #5780a6;float:left;height:100%;margin:0;margin-right:-1px}.section-content-container ul.segmented-control li.segment-item span.segment-button,.custom-tool ul.segmented-control li.segment-item span.segment-button{background-color:#fff;color:#5780a6;cursor:pointer;display:block;font-size:12px;line-height:26px;padding:0 5px;text-align:center}.section-content-container ul.segmented-control li.segment-item span.segment-button.segment-button-selected,.custom-tool ul.segmented-control li.segment-item span.segment-button.segment-button-selected{background-color:#5780a6;color:#fff}.section-content-container ul.segmented-control.disabled,.custom-tool ul.segmented-control.disabled{cursor:default}.section-content-container ul.segmented-control.disabled li.segment-item,.custom-tool ul.segmented-control.disabled li.segment-item{border-color:#333;opacity:.5}.section-content-container ul.segmented-control.disabled li.segment-item span.segment-button,.custom-tool ul.segmented-control.disabled li.segment-item span.segment-button{background-color:#fff;color:#333;cursor:default}.section-content-container ul.segmented-control.disabled li.segment-item span.segment-button.segment-button-selected,.custom-tool ul.segmented-control.disabled li.segment-item span.segment-button.segment-button-selected{background-color:#333;color:#fff}</style>';
        var html = this[this.name]['segmented-control']({
            segments: this._segments
        });

        // Inject the HTML into the specified container.
        $('#' + this.containerId).html(css + html);
        this.$segmentButtons = $('#' + this.containerId + ' .segment-button');

        // Find the segment button with the largest width.
        var maxSegmentButtonWidth = 0;

        this.$segmentButtons.each(function () {
            var segmentButtonWidth = $(this).width();

            if (segmentButtonWidth > maxSegmentButtonWidth) {
                maxSegmentButtonWidth = segmentButtonWidth;
            }
        });

        // Account for rounding errors with largest segment width.
        ++maxSegmentButtonWidth;

        // Change all segment buttons to have the same width as the largest width.
        this.$segmentButtons.each(function () {
            $(this).css('width', maxSegmentButtonWidth + 'px');
        });

        // Keep track of whether the segmented control is enabled
        this.segmentedControlIsEnabled = true;

        // Add click listeners.
        var self = this;
        this.$segmentButtons.click(function () {
            if (self.segmentedControlIsEnabled) {

                // Get the index of the clicked segment.
                var segmentIndex = parseInt($(this).attr('data-index'), 10);
                var hadInteraction = true;

                self.selectSegmentByIndex(segmentIndex, hadInteraction);
            }
        });
    };

    // Get the index of the selected segment.
    this.getSelectedSegmentIndex = function () {
        var $selectedSegment = $('#' + this.containerId + ' .segment-button-selected');
        if ($selectedSegment.length === 0) {
            return null;
        } else {
            return parseInt($selectedSegment.attr('data-index'), 10);
        }
    };

    // Remove the selection from all segments.
    this.deselectSegments = function () {
        this.$segmentButtons.removeClass('segment-button-selected');
    };

    /**
      Selects the segment in index |segmentIndex|.
      Note that calling this function does invoke the "clicked" callback.
      @method selectSegmentByIndex
      @param {Integer} segmentIndex The index of the segment to select.
      @param {Boolean} [hadInteraction=false] Whether the segment changes because a user interacted with it.
      @return {void}
    */
    this.selectSegmentByIndex = function (segmentIndex) {
        var hadInteraction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        this.deselectSegments();

        // Add selection to the clicked segment.
        this.$segmentButtons.filter('[data-index=' + segmentIndex + ']').addClass('segment-button-selected');

        // Call the callback.
        if (this.segmentSelectedCallback) {
            this.segmentSelectedCallback(segmentIndex, this._segments[segmentIndex].title, hadInteraction);
        }
    };

    /*
      Selects the segment with the title |segmentTitle|.
       Note that calling this function does invoke the "clicked" callback.
    */
    this.selectSegmentByTitle = function (segmentTitle) {
        // Get the index of the segment with |segmentTitle|.
        var segment = this._segments.filter(function (segment) {
            return segment.title === segmentTitle;
        })[0];

        if (segment) {
            this.selectSegmentByIndex(segment.index);
        }
    };

    this.disable = function () {
        $('#' + this.containerId + ' .segmented-control').addClass('disabled');
        this.segmentedControlIsEnabled = false;
    };

    this.enable = function () {
        $('#' + this.containerId + ' .segmented-control').removeClass('disabled');
        this.segmentedControlIsEnabled = true;
    };

    /**
        Removes the last segment.
        @method removeLastSegment
        @param {Integer} index The index of the segment to be removed.
        @return {void}
    */
    this.removeSegmentByIndex = function (index) {
        this._segments.splice(index, 1);
        this.render();
    };

    /**
        Adds a segment with the passed |title| in the passed |index|.
        @method addSegmentAtIndex
        @param {String} title The new segment's title.
        @param {Integer} [index=-1] The index at which to place the segment.
        @return {void}
    */
    this.addSegmentAtIndex = function (title) {
        var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

        var segment = this._makeSegment(title, this._segments.length, false);

        this._segments.splice(index, 0, segment);
        this.render();
    };

    // This is more required boilerplate.
    this["segmentedControl"] = this["segmentedControl"] || {};

    this["segmentedControl"]["segmented-control"] = Handlebars.template({ "1": function _(container, depth0, helpers, partials, data) {
            var stack1,
                helper,
                alias1 = depth0 != null ? depth0 : container.nullContext || {},
                alias2 = helpers.helperMissing,
                alias3 = "function",
                alias4 = container.escapeExpression;

            return "        <li class='segment-item'>\n           <span class='segment-button arrow-left" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.selected : depth0, { "name": "if", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "' data-index='" + alias4((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2, (typeof helper === 'undefined' ? 'undefined' : _typeof(helper)) === alias3 ? helper.call(alias1, { "name": "index", "hash": {}, "data": data }) : helper)) + "'>" + alias4((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2, (typeof helper === 'undefined' ? 'undefined' : _typeof(helper)) === alias3 ? helper.call(alias1, { "name": "title", "hash": {}, "data": data }) : helper)) + "</span>\n       </li>\n";
        }, "2": function _(container, depth0, helpers, partials, data) {
            return " segment-button-selected";
        }, "compiler": [7, ">= 4.0.0"], "main": function main(container, depth0, helpers, partials, data) {
            var stack1;

            return "<ul class='segmented-control'>\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.segments : depth0, { "name": "each", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "</ul>\n";
        }, "useData": true });
}

module.exports = {
    create: function create() {
        return new SegmentedControl();
    }
};


exports.default = module.exports;
});