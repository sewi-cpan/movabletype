# Movable Type (r) Open Source (C) 2001-2013 Six Apart, Ltd.
# This program is distributed under the terms of the
# GNU General Public License, version 2.
#
# $Id$
package MT::DataAPI::Endpoint::Trackback;

use warnings;
use strict;

use MT::Util qw(remove_html);
use MT::DataAPI::Endpoint::Common;
use MT::DataAPI::Resource;

sub list {
    my ( $app, $endpoint ) = @_;

    my $res = filtered_list( $app, $endpoint, 'ping' ) or return;

    +{  totalResults => $res->{count} + 0,
        items =>
            MT::DataAPI::Resource::Type::ObjectList->new( $res->{objects} ),
    };
}

sub list_for_entries {
    my ( $app, $endpoint ) = @_;

    my ( $blog, $entry ) = context_objects(@_)
        or return;

    my $res = filtered_list(
        $app,
        $endpoint,
        'ping', undef,
        {   joins => [
                MT->model('trackback')->join_on(
                    undef,
                    {   entry_id => $entry->id,
                        id       => \'= tbping_tb_id',
                    },
                )
            ],
        }
    );

    +{  totalResults => $res->{count} + 0,
        items =>
            MT::DataAPI::Resource::Type::ObjectList->new( $res->{objects} ),
    };
}

sub get {
    my ( $app, $endpoint ) = @_;

    my ( $blog, $trackback ) = context_objects(@_)
        or return;

    run_permission_filter( $app, 'data_api_view_permission_filter',
        'ping', $trackback->id, obj_promise($trackback) )
        or return;

    $trackback;
}

sub update {
    my ( $app, $endpoint ) = @_;

    my ( $blog, $trackback ) = context_objects(@_)
        or return;
    my $new_trackback = $app->resource_object( 'trackback', $trackback )
        or return;

    save_object( $app, 'ping', $new_trackback, $trackback )
        or return;

    $new_trackback;
}

sub delete {
    my ( $app, $endpoint ) = @_;

    my ( $blog, $trackback ) = context_objects(@_)
        or return;

    remove_object( $app, 'ping', $trackback )
        or return;

    $trackback;
}

1;
