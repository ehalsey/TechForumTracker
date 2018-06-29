using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TechForumTracker.Models
{
    public class TechForumContext : DbContext
    {
        public TechForumContext(DbContextOptions<TechForumContext> options)
            : base(options)
        { }

        public DbSet<Visit> Visits { get; set; }
    }

    public class Visit
    {
        public int VisitId { get; set; }
        public string VisitorBadgeNumber { get; set; }
        public DateTime VisitDate { get; set; }
        public string VisitLocation { get; set; }
    }

}
