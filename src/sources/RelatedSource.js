import BaseSource from 'sources/BaseSource';

export default class RelatedSource extends BaseSource {
	static related(traktID){
		return super.getJSON(super.TRAK_ENDPOINT + "movies/" + traktID + "/related");
	}
}