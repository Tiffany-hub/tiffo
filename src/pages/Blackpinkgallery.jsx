import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const GalleryContainer = styled.div`
  background-color: #ff69b4; /* Hot Pink */
  color: #fff;
  padding: 20px;
`;

const GalleryTitle = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-top: 0;
  color: black;
`;

const GallerySection = styled.section`
  margin-top: 40px;
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  text-align: left;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 0.5fr);
  grid-gap: 20px;
  margin-top: 10px;
`;

const Image = styled.img`
  width: auto;
  border-radius: 10px;
  height: 370px;
`;

const BlackpinkGallery = () => {
  return (
    <GalleryContainer>
      <GalleryTitle>Blackpink Gallery</GalleryTitle>
      <GallerySection>
        <SectionTitle>Jennie</SectionTitle>
        <ImageGrid>
          <Image src="https://i.pinimg.com/236x/0a/b4/f3/0ab4f352b6b3e132dc461f361c3be698.jpg" alt="Jennie 1" />
          <Image src="https://i.pinimg.com/236x/9f/7d/4b/9f7d4bb3f7ad98c01ec92170e1f9382f.jpg" alt="Jennie 2" />
          <Image src="https://i.pinimg.com/236x/24/13/e4/2413e44b5ca99d3195093f70aec84227.jpg" alt="Jennie 3" />
          <Image src="https://i.pinimg.com/236x/97/c9/9a/97c99aa4466d42acddb776fa6dd378ef.jpg" alt="Jennie 4" />
          <Image src="https://i.pinimg.com/236x/39/3b/7b/393b7b05af8081438a3688e4af44e845.jpg" alt="Jennie 5" />
          <Image src="https://i.pinimg.com/236x/42/ac/64/42ac64d791e7ac7e277024e82f3681df.jpg" alt="Jennie 6" />
          <Image src="https://i.pinimg.com/236x/d7/81/f7/d781f77626bda7cb6153be0857550661.jpg" alt="Jennie 7" />
          <Image src="https://i.pinimg.com/236x/b1/eb/87/b1eb879a0a5f8cc29b89090491de02ea.jpg" alt="Jennie 8" />
          <Image src="https://i.pinimg.com/236x/8c/50/66/8c5066746510dff76d3f46a6da8488bf.jpg" alt = "Jennie 9" />
          <Image src="https://i.pinimg.com/236x/c7/a0/51/c7a051d45bcf7d47753839d91c47918f.jpg" alt="Jennie 10"/>
          <Image src="https://i.pinimg.com/236x/31/8b/f7/318bf7134f3374907b595f813b5b8181.jpg" alt="Jennie 11" />
          <Image src="https://i.pinimg.com/236x/e9/28/44/e92844617db06697608c6add146a9bfa.jpg" alt="Jennie 12" />
          <Image src="https://i.pinimg.com/236x/68/fb/08/68fb080209090ece7bf0d5ac3a03434f.jpg" alt="Jennie 13" />
        </ImageGrid>
      </GallerySection>
      <GallerySection>
        <SectionTitle>Lisa</SectionTitle>
        <ImageGrid>
          <Image src="https://i.pinimg.com/236x/b7/cb/8c/b7cb8c4877e5ec78372fafc62ff4414d.jpg" alt="Lisa 1" />
          <Image src="https://i.pinimg.com/236x/f2/67/77/f267778a5309a5b11892062aeeff743d.jpg" alt="Lisa 2" />
          <Image src="https://i.pinimg.com/236x/e7/06/60/e706603e5e815a36169db1db8a90cace.jpg" alt="Lisa 3" />
          <Image src="https://i.pinimg.com/236x/b1/1d/46/b11d46e17e4f45fd04b4921bbc93c55d.jpg" alt="Lisa 4" />
          <Image src="https://i.pinimg.com/236x/c6/00/05/c60005d9d90ea831ffb16858744788fa.jpg" alt="Lisa 5" />
          <Image src="https://i.pinimg.com/236x/44/b5/87/44b587d7f7a197f0a2f3c5a9bf51028f.jpg" alt="Lisa 6" />
          <Image src="https://i.pinimg.com/236x/51/e4/0a/51e40a46ef80d074ac045fd4d606d27e.jpg" alt="Lisa 7" />
          <Image src="https://i.pinimg.com/236x/ad/cc/49/adcc497d3644b394b71315adcab411f9.jpg" alt="Lisa 8" />
          <Image src="https://i.pinimg.com/236x/ec/b6/c3/ecb6c30673a1b9c3ac960be8d3add341.jpg" alt="Lisa 9" />
          <Image src="https://i.pinimg.com/236x/c8/9d/ce/c89dce9a0296201b5b5bf7d40ab451de.jpg" alt="Lisa 10" />
          <Image src="https://i.pinimg.com/236x/8e/fa/8b/8efa8b5a9a27791dc182b762f61c8c82.jpg" alt="Lisa 11" />
          <Image src="https://i.pinimg.com/236x/dc/79/a9/dc79a99e300b252e6e01442d2ec10aad.jpg" alt="Lisa 12" />


        </ImageGrid>
      </GallerySection>
      <GallerySection>
        <SectionTitle>Rose</SectionTitle>
        <ImageGrid>
          <Image src="https://i.pinimg.com/236x/4c/11/a5/4c11a5400bf34367d07d5289b10e9e19.jpg" alt="Rose 1" />
          <Image src="https://i.pinimg.com/236x/43/51/73/43517339d305bba69acc86b57711e020.jpg" alt="Rose 2" />
          <Image src="https://i.pinimg.com/236x/ea/4e/c7/ea4ec7d49a2388c58b70f666b2a4d054.jpg" alt="Rose 3" />
          <Image src="https://i.pinimg.com/236x/2f/5f/9c/2f5f9ce079f834161df3f442e4143f19.jpg" alt="Rose 4" />
          <Image src = "https://i.pinimg.com/236x/b6/84/56/b68456a03c0742c17825dff3b2d6f922.jpg" alt = "Rose 5" />
          <Image src = "https://i.pinimg.com/236x/7b/bc/42/7bbc427af2807a02fbab3bd7dc5891fa.jpg" alt = "Rose 6" />
          <Image src = "https://i.pinimg.com/236x/9b/00/fb/9b00fbf7c16aad067b474cd80eba7d20.jpg" alt = "Rose 7" />
          <Image src = "https://i.pinimg.com/236x/9c/9b/43/9c9b43401f883b835ed1806460b9996b.jpg" alt = "Rose 8" />
          <Image src = "https://i.pinimg.com/236x/8f/14/77/8f147756ef098b8ce4957fdd37f35d06.jpg" alt = "Rose 9 "/>
          <Image src = "https://i.pinimg.com/236x/82/7f/b3/827fb3712dcc5546f21197f379dbb1ad.jpg" alt = "Rose 10" />
          <Image src = "https://i.pinimg.com/236x/45/f4/ee/45f4ee89b680c8c2bc44c18f33843448.jpg "alt = "Rose 11"/>
          <Image src = "https://i.pinimg.com/236x/d3/f4/96/d3f49677c849c944de6b7f123024b1a7.jpg" alt = "Rose 12" />
        </ImageGrid>
      </GallerySection>
      <GallerySection>
        <SectionTitle>Jisoo</SectionTitle>
        <ImageGrid>
          <Image src="https://i.pinimg.com/236x/7a/2e/28/7a2e2850b759c340017ea87b22be193d.jpg" alt="Jisoo 1" />
          <Image src="https://i.pinimg.com/236x/12/ac/60/12ac60d50a67dc7504a054625116ad32.jpg" alt="Jisoo 2" />
          <Image src="https://i.pinimg.com/236x/18/f7/99/18f799eefe464bdce9aa6c609e8eceab.jpg" alt="Jisoo 3" />
          <Image src="https://i.pinimg.com/236x/74/ef/26/74ef2663120dd86232451a2b7582b4c0.jpg" alt="Jisoo 4" />
          <Image src="https://i.pinimg.com/236x/ff/b9/44/ffb944f02e527c7c8209cb67a9915f4e.jpg" alt="Jisoo 5" />
          <Image src="https://i.pinimg.com/236x/fd/07/f8/fd07f8b17e96ef23eaa2b6e090ba162e.jpg" alt= "Jisoo 6" />
          <Image src = "https://i.pinimg.com/236x/90/55/48/90554869851ce3415a125eabb9d8c04b.jpg" alt= "Jisoo 7"/>
          <Image src="https://i.pinimg.com/236x/95/85/60/958560b4e66d56c86a9c2a656dfe1c96.jpg" alt = "Jisoo 8"/>
          <Image src = "https://i.pinimg.com/236x/86/5e/75/865e758e00f26f00c4229f5a15090961.jpg" alt = "Jisoo 9" />
          <Image src = "https://i.pinimg.com/236x/17/7a/2d/177a2de90d0d0ca92b68ece3194dba38.jpg" alt = "Jisoo 10" />
          <Image src = "https://i.pinimg.com/236x/98/44/d5/9844d5bff9a2484362381cafd53cdf64.jpg" alt = "Jisoo 11" />
          <Image src = "https://i.pinimg.com/236x/30/07/37/300737452095958eebe24ab802e9e01d.jpg" alt = "Jisoo 12"/>
          <Image src = "https://i.pinimg.com/236x/57/b1/f0/57b1f0c7d99bcfe12fb6739ced404495.jpg" alt = "Jisoo 13" />
        </ImageGrid>
      </GallerySection>
      <GallerySection>
        <SectionTitle>Group</SectionTitle>
        <ImageGrid>
          <Image src="https://i.pinimg.com/236x/8f/56/f9/8f56f93a1d655d4f647095987b9f1fab.jpg" alt="Group 1" />
          <Image src="https://i.pinimg.com/236x/88/60/6e/88606e21e404668361de8c17073206d2.jpg" alt="Group 2" />
          <Image src="https://i.pinimg.com/236x/e8/61/2e/e8612e4fe467b4f248cb4a1a9f371562.jpg" alt="Group 3" />
          <Image src="https://i.pinimg.com/236x/09/c4/f1/09c4f15fff4299d840731bc75c0a2107.jpg" alt="Group 4" />
          <Image src = "https://i.pinimg.com/236x/02/07/1a/02071a15da84e390e895bebad08db27f.jpg" alt = "Group 5" />
          <Image src = "https://i.pinimg.com/236x/7d/d6/71/7dd6711aa7802533e78b0e6b49515f60.jpg" alt = "Group 6" />
          <Image src = "https://i.pinimg.com/236x/4b/0e/1b/4b0e1b910d3e35fa4786f5cae36dae92.jpg" alt = "Group 7" />
          <Image src = "https://i.pinimg.com/236x/97/89/72/978972b68c78ab08cba43793a13cd251.jpg" alt = "Group 8" />
          <Image src="https://i.pinimg.com/236x/2f/3c/77/2f3c77e5742071d61e95d022f01b56d6.jpg" alt="Group 9" />
          <Image src="https://i.pinimg.com/236x/fa/18/e4/fa18e4754094e0d4a86a6203dd5014ea.jpg" alt="Group 10" />
          <Image src="https://i.pinimg.com/236x/c4/aa/68/c4aa68b011af5bbc4302048a60b7fb97.jpg" alt="Group 11" />
          <Image src="https://i.pinimg.com/236x/80/21/a4/8021a43af6db0ea27234f1fb256f2cf7.jpg" alt="Group 12"/>
          <Image src="https://i.pinimg.com/236x/aa/d2/b4/aad2b4ada036b8f1113764bfa50173f0.jpg" alt="Group 13" />
          <Image src="https://i.pinimg.com/236x/01/fa/e9/01fae9db797c155ecc3e9cf6cd6606ca.jpg" alt="Group 14" />
          <Image src="https://i.pinimg.com/236x/52/48/dc/5248dc3e89c308c2a047b1875d0fe803.jpg" alt="Group 15" />
          <Image src="https://i.pinimg.com/236x/23/c0/65/23c0656d7e9f0d80566a3cdae2ec2d5d.jpg" alt="Group 16" />
          <Image src="https://i.pinimg.com/236x/ef/aa/7b/efaa7b57f6ffa9437854b890e6f5dc30.jpg" alt="Group 17" />
          <Image src="https://i.pinimg.com/236x/88/d2/94/88d2940bb8e7890cfd3282feb196a226.jpg" alt="Group 18" />
          <Image src="https://i.pinimg.com/236x/c9/33/05/c93305de8a3d20a7fa13d837be5cfe6d.jpg" alt="Group 19" />
          <Image src="https://i.pinimg.com/236x/7f/46/92/7f4692f5c7e99458e2268fe58f1c37f1.jpg" alt="Group 20" />
          <Image src="https://i.pinimg.com/236x/f4/2c/f5/f42cf537a19dc292144fc1154327a8d0.jpg" alt="Group 21" />
          <Image src="https://i.pinimg.com/236x/97/7e/23/977e23ee7c7eb3797166a8e877e233ce.jpg" alt="Group 23" />
        </ImageGrid>
      </GallerySection>
    </GalleryContainer>
  );
};

export default BlackpinkGallery;
