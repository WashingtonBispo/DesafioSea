using DesafioSEA.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesafioSEA.Data.Mapping
{
    public class StoryMap : IEntityTypeConfiguration<StoryEntity>
    {   
        public void Configure(EntityTypeBuilder<StoryEntity> builder)
        {
            builder.ToTable("Story");

            builder.HasKey(a => a.IdStory);

            builder.Property(e => e.StoryText).IsRequired();

            builder.Property(e => e.CreatedAt).IsRequired();
            builder.HasOne<UserEntity>(e => e.Author);
            builder.HasMany<UserEntity>(e => e.Likes).WithMany(e => e.Likes);
        }
    }
}
