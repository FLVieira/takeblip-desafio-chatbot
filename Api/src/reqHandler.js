/* eslint-disable class-methods-use-this */
import axios from './services/axios';

class RequisitionHandler {
  async index(req, res) {
    try {
      const { data } = await axios.get('orgs/takenet/repos?sort=created&direction=asc&per_page=5');
      const formattedData = {};
      data.forEach((item, index) => {
        formattedData[`repo_${index}`] = {
          full_name: item.full_name,
          description: item.description,
          avatar: item.owner.avatar_url,
          created_at: item.created_at,
        };
      });
      res.json(formattedData);
    } catch {
      res.status(404).json({ msg: 'error' });
    }
  }
}

export default new RequisitionHandler();
