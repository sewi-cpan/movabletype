package MT::DataAPI::Resource::Permission;

use strict;
use warnings;

use MT::DataAPI::Resource::Common;

sub updatable_fields {
    [];
}

sub fields {
    [   $MT::DataAPI::Resource::Common::fields{blog},
        {   name             => 'permissions',
            bulk_from_object => sub {
                my ( $objs, $hashs ) = @_;
                my $app  = MT->instance;
                my $user = $app->user;

                if ( $user->is_superuser ) {
                    my $blog_perms = [
                        sort map { $_ =~ /'(.*?)'/ } split ',',
                        MT::Permission::_all_perms('blog')
                    ];
                    my $system_perms = [
                        sort map { $_ =~ /'(.*?)'/ } split ',',
                        MT::Permission::_all_perms('system')
                    ];
                    for ( my $i = 0; $i < scalar @$objs; $i++ ) {
                        $hashs->[$i]{permissions}
                            = $objs->[$i]->blog_id
                            ? $blog_perms
                            : $system_perms;
                    }
                    return;
                }

                for ( my $i = 0; $i < scalar @$objs; $i++ ) {
                    my @restrictions = map { $_ =~ /'(.*?)'/ } split ',',
                        $objs->[$i]->restrictions;
                    $hashs->[$i]{permissions} = [
                        sort grep {
                            my $p = $_;
                            !grep { $_ eq $p } @restrictions
                            } map { $_ =~ /'(.*)'/ } split ',',
                        $objs->[$i]->permissions
                    ];
                }
            },
        },
    ];
}

1;
