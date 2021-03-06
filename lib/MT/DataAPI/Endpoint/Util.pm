# Movable Type (r) Open Source (C) 2001-2013 Six Apart, Ltd.
# This program is distributed under the terms of the
# GNU General Public License, version 2.
#
# $Id$
package MT::DataAPI::Endpoint::Util;

use warnings;
use strict;

sub endpoints {
    my ( $app, $endpoint ) = @_;

    my @includes
        = map { lc $_ } split( ',', $app->param('includeComponents') || '' );
    my @excludes
        = map { lc $_ } split( ',', $app->param('excludeComponents') || '' );

    my $endpoint_data = $app->endpoints( $app->current_api_version );
    my @results       = map {
        my $e = $_;
        my %endpoint = map { $_ => $e->{$_} }
            qw(id route version resources format verb);
        my $c    = $e->{component};
        my $c_id = $c->id;

        if (   ( @includes && !grep { $_ eq lc $c_id } @includes )
            || ( @excludes && grep { $_ eq lc $c_id } @excludes ) )
        {
            ();
        }
        else {
            $endpoint{component} = {
                id   => $c_id,
                name => $c->name,
            };

            \%endpoint;
        }
    } @{ $endpoint_data->{list} };

    +{  totalResults => scalar @results,
        items        => \@results,
    };
}

1;
