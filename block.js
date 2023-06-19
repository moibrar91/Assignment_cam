(function (blocks, element, components, api) {
    var el = element.createElement;
    var InspectorControls = blocks.InspectorControls;
    var ServerSideRender = blocks.ServerSideRender;
    var PanelBody = components.PanelBody;
    var TextControl = components.TextControl;
    var Button = components.Button;

    blocks.registerBlockType('my-slideshow-block/my-slideshow', {
        title: 'My Slideshow Block',
        icon: 'slides',
        category: 'common',

        attributes: {
            websiteURL: {
                type: 'string',
                default: 'https://example.com',
            },
        },

        edit: function (props) {
            var websiteURL = props.attributes.websiteURL;

            function updateWebsiteURL(value) {
                props.setAttributes({ websiteURL: value });
            }

            function switchContent() {
                
            }

            return [
                el(
                    InspectorControls,
                    { key: 'inspector' },
                    el(
                        PanelBody,
                        { title: 'Slideshow Settings', initialOpen: true },
                        el(
                            TextControl,
                            {
                                label: 'Website URL',
                                value: websiteURL,
                                onChange: updateWebsiteURL,
                            }
                        ),
                        el(
                            Button,
                            {
                                onClick: switchContent,
                                isPrimary: true,
                            },
                            'Switch Content'
                        )
                    )
                ),
                el(
                    ServerSideRender,
                    {
                        block: 'my-slideshow-block/my-slideshow',
                        attributes: props.attributes,
                    }
                ),
            ];
        },

        save: function () {
            // This block will be rendered on the server-side
            return null;
        },
    });
})(
    window.wp.blocks,
    window.wp.element,
    window.wp.components,
    window.wp.api
);
