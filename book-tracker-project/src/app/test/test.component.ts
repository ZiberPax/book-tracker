import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'exchange-rates',
    template: `
        @if (loading) {
            <div>Loading...</div>
        }
        @if (error) {
            <div>Error :(</div>
        }
        @if (rates) {
            @for (rate of rates; track $index) {
                <p>{{ rate.currency }}: {{ rate.rate }}</p>
            }
        }
    `,
})
export class ExchangeRates implements OnInit {
    rates: any[] | undefined;
    loading = true;
    error: any;

    constructor(private readonly apollo: Apollo) {}

    ngOnInit() {
        this.apollo
        .watchQuery({
            query: gql`
                {
                    rates(currency: "USD") {
                        currency
                        rate
                    }
                }
            `,
        })
        .valueChanges.subscribe((result: any) => {
            this.rates = result.data?.rates;
            this.loading = result.loading;
            this.error = result.error;
        });
    }
}