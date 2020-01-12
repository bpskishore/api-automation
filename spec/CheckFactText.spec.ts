import {} from 'jasmine';
import { getFacts } from './service/service';


describe('Get Facts From Service', () => {
    it('First Test Case', async () => {
        let result = await getFacts();
        result.data.all.forEach((value: any) => {
            expect(value.text).not.toBeNull();
        });
    });
});
