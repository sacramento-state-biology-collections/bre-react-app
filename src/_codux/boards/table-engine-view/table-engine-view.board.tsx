import { createBoard } from '@wixc3/react-board';
import { TableEngineView } from '../../../components/table-engine-view/table-engine-view';

export default createBoard({
    name: 'TableEngineView',
    Board: () => (
        <TableEngineView 
            toggle_WelcomeView={()=>{}} 
            toggle_TableEngineView={()=>{}}
            update_CollectionData={([])=>{}}            
            update_CollectionName={()=>{}}
            update_SearchCriteria={()=>{}}
            object_CollectionData={[]}
            string_CollectionName={''}
            string_SearchCriteria={''}
        />
    )
});
