import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const todos = [
            {
                id: 1,
                title: 'Create test 2Do list task',
                completed: true
            },
            {
                id: 2,
                title: 'Submit task for review',
                completed: false
            },
            {
                id: 3,
                title: 'Get a job',
                completed: false
            },
            {
                id: 4,
                title: 'Be heppy =)',
                completed: false
            }
        ];

        return { todos };
    }
}
