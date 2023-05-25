using DictService as service from '../../srv/service';

annotate service.CardsService with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Word',
            Value : Word,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Translate',
            Value : Translate,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Example',
            Value : Example,
        },
    ]
);
annotate service.CardsService with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'Word',
                Value : Word,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Translate',
                Value : Translate,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Example',
                Value : Example,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
